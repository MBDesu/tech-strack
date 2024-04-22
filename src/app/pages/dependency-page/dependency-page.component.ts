import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelContent,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';
import { forkJoin } from 'rxjs';
import * as semver from 'semver';
import { ProductCyclesComponent } from '../../components/product-cycles/product-cycles.component';
import { UploadFileDropperComponent } from '../../components/upload-file-dropper/upload-file-dropper.component';
import { NpmService } from '../../services/npm/npm.service';

@Component({
  selector: 'app-dependency-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    UploadFileDropperComponent,
    MatTooltip,
    CdkDrag,
    CdkDropList,
    MatAccordion,
    MatButton,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelContent,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    ProductCyclesComponent,
  ],
  templateUrl: './dependency-page.component.html',
  styleUrl: './dependency-page.component.scss'
})
export class DependencyPageComponent {

  private npmService = inject(NpmService);

  protected fileUploaded = false;
  protected packageDependencies = new Map<string, string>();
  protected packageDevDependencies = new Map<string, string>();
  protected latestDependencies = new Map<string, string>();
  protected latestDevDependencies = new Map<string, string>();
  protected diffs: { dep: string, diff: string | null, current: string, latest: string }[] = [];
  protected devDiffs: { dep: string, diff: string | null, current: string, latest: string }[] = [];
  protected processing = false;

  protected onFileUpload = (file: File): void => {
    this.fileUploaded = true;
    this.processFile(file);
  }

  private processFile = (file: File): void => {
    this.processing = true;
    const fr = new FileReader();
    fr.readAsText(file, 'utf-8');
    fr.onload = (e: ProgressEvent<FileReader>) => {
      if(e?.target?.result) {
        const packageJsonContent = JSON.parse(e.target.result as string);
        this.processDependencies(packageJsonContent);
      }
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private processDependencies = (packageJsonContent: any): void => {
    if (packageJsonContent.dependencies) {
      Object.keys(packageJsonContent.dependencies as { [key: string]: string }).forEach(
        (key) => this.packageDependencies.set(key, packageJsonContent.dependencies[key])
      );
    }
    if (packageJsonContent.devDependencies) {
      Object.keys(packageJsonContent.devDependencies as { [key: string]: string }).forEach(
        (key) => this.packageDevDependencies.set(key, packageJsonContent.devDependencies[key])
      );
    }
    const packages = Array.from(this.packageDependencies.keys())
    const devPackages = Array.from(this.packageDevDependencies.keys());
    const packageFetches = [];
    const devPackageFetches = [];
    if (packages.length) {
      packageFetches.push(
        ...packages.map((npmPackage: string) => this.npmService.getPackage(npmPackage, 'latest'))
      );
    }
    if (devPackages.length) {
      devPackageFetches.push(
        ...devPackages.map((npmPackage: string) => this.npmService.getPackage(npmPackage, 'latest'))
      );
    }
    if (packageFetches.length) {
      forkJoin(packageFetches).subscribe({
        next: (data) => {
          data.map((dep) => this.latestDependencies.set(dep['name'], dep['version']));
        },
        complete: () => {
          this.diffs = this.getVersionDiffs(this.packageDependencies, this.latestDependencies);
          this.processing = false;
        },
      });
    }
    if (devPackageFetches.length) {
      forkJoin(devPackageFetches).subscribe({
        next: (data) => {
          data.map((dep) => this.latestDevDependencies.set(dep['name'], dep['version']));
        },
        complete: () => {
          this.devDiffs = this.getVersionDiffs(this.packageDevDependencies, this.latestDevDependencies);
          this.processing = false;
        },
      });
    }
  }

  private getVersionDiffs = (currentDeps: Map<string, string>, latestDeps: Map<string, string>):
    { dep: string, diff: string | null, current: string, latest: string }[] => {
    const deps = Array.from(currentDeps.keys());
    return deps.map((dep) => {
      const currentMinVersion = semver.minVersion(semver.validRange(currentDeps.get(dep)!)!)!;
      const latestVersion = latestDeps.get(dep)!;
      const diff = semver.diff(currentMinVersion, latestVersion);
      console.log(dep, diff);
      return { dep: dep, diff: diff as string, current: currentMinVersion.raw, latest: latestVersion };
    });
  }

  protected getDiffIcon = (diff: string | null): string => {
    switch (diff) {
      // "major" | "premajor" | "minor" | "preminor" | "patch" | "prepatch" | "prerelease"
      case 'major':
        return 'error';
      case 'minor':
        return 'warning';
      case 'patch':
        return 'upgrade';
      case null:
      default:
        return 'done';
    }
  }

  protected getDiffTooltip = (diff: string | null): string => {
    switch (diff) {
      case 'major':
        return 'Latest is at least one major version ahead; probably contains breaking changes';
      case 'minor':
        return 'Latest is at least one minor version ahead; may contain breaking changes';
      case 'patch':
        return 'There is a new patch available';
      case null:
      default:
        return '';
    }
  }

  protected getDiffIconColor = (diff: string | null): string => {
    switch (diff) {
      case 'major':
        return 'error-icon';
      case 'minor':
        return 'tertiary-icon';
      case 'patch':
        return 'primary-icon';
      case null:
      default:
        return 'surface-icon';
    }
  }

}
