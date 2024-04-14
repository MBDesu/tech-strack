export interface ColumnDefinition {
  header: string;
  unavailable?: boolean;
  invert?: boolean;
  altGoodText?: string;
  altBadText?: string;
}

export interface ProductDefinition {
  name: string;
  columns: { [key: string]: ColumnDefinition | undefined };
  auxTable?: { [key: string]: ColumnDefinition | undefined };
}

export interface ProductColumnDefinition {
  [key: string]: ProductDefinition | undefined;
}

export const productCycleColumnMapping: ProductColumnDefinition = {
  'akeneo-pim': {
    name: 'Akeneo PIM',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'alibaba-dragonwell': {
    name: 'Alibaba Dragonwell',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'almalinux': {
    name: 'AlmaLinux OS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-support': {
        header: 'Active Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'alpine': {
    name: 'Alpine Linux',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    }
  },
  'amazon-cdk': {
    name: 'Amazon CDK',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'amazon-corretto': {
    name: 'Amazon Corretto',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'amazon-eks': {
    name: 'Amazon EKS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      }
    }
  },
  'amazon-glue': {
    name: 'Amazon Glue',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Release Date',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
    },
  },
  'amazon-linux': {
    name: 'Amazon Linux',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Standard Support',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'amazon-neptune': {
    name: 'Amazon Neptune',
    columns: {
      'cycle-cycle': {
        header: 'Release'
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'amazon-rds-mysql': {
    name: 'Amazon RDS for MySQL',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'amazon-rds-postgresql': {
    name: 'Amazon RDS for PostgreSQL',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'android': {
    name: 'Android OS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
    },
  },
  'angular': {
    name: 'Angular',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-extended-support': {
        header: 'Commercial Support',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'angularjs': {
    name: 'AngularJS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support',
      },
      'cycle-extended-support': {
        header: 'Extended Long Term Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ckeditor': {
    name: 'CKEditor',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
        unavailable: true,
      }
    },
  },
  'electron': {
    name: 'Electron',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Supported',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'horizon': {
    name: 'VMware Horizon',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'General Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ionic': {
    name: 'Ionic Framework',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Maintenance Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-angular-versions': undefined,
      'cycle-aux-react-versions': undefined,
      'cycle-aux-vue-versions': undefined,
    },
  },
  'jenkins': {
    name: 'Jenkins',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'kotlin': {
    name: 'Kotlin',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'macos': {
    name: 'Apple macOS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Service Status',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'mssqlserver': {
    name: 'Microsoft SQL Server',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-extended-support': {
        header: 'Extended Security Updates',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'mysql': {
    name: 'MySQL',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Premier Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Extended Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'nextjs': {
    name: 'Next.js',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'nodejs': {
    name: 'Node.js',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      }
    }
  },
  'oracle-jdk': {
    name: 'Oracle JDK',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Premier Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'php': {
    name: 'PHP',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'pixel': {
    name: 'Google Pixel',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-android-versions': {
        header: 'Supported Android',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        invert: true,
        altGoodText: 'In Production',
      },
      'cycle-support': {
        header: 'Android Updates',
      },
      'cycle-eol': {
        header: 'Security Updates',
      },
    }
  },
  'postgresql': {
    name: 'PostgreSQL',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support Status',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'protractor': {
    name: 'Protractor',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Community Support',
      },
      'cycle-extended-support': {
        header: 'Commercial Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'python': {
    name: 'Python',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'rabbitmq': {
    name: 'RabbitMQ',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Community Support',
      },
      'cycle-extended-support': {
        header: 'Extended Commercial Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'rails': {
    name: 'Ruby on Rails',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'react': {
    name: 'React',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'redis': {
    name: 'Redis',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'rhel': {
    name: 'Red Hat Enterprise Linux',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Full Support',
      },
      'cycle-lts': {
        header: 'Maintenance Support',
      },
      'cycle-extended-support': {
        header: 'Extended Life Cycle Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ruby': {
    name: 'Ruby',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support Status',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'rust': {
    name: 'Rust',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Supported',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'splunk': {
    name: 'Splunk',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'spring-boot': {
    name: 'Spring Boot',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'OSS Support',
      },
      'cycle-extended-support': {
        header: 'Commercial Support',
      },
      'cycle-supported-java-versions': {
        header: 'JDK',
      },
      'cycle-latest': {
        header: 'Latest',
      }
    }
  },
  'spring-framework': {
    name: 'Spring Framework',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'OSS Support',
      },
      'cycle-extended-support': {
        header: 'Commercial Support',
      },
      'cycle-supported-java-versions': {
        header: 'JDK',
      },
      'cycle-supported-jakarta-ee-versions': {
        header: 'Jakarta EE',
      },
      'cycle-latest': {
        header: 'Latest',
      }
    },
  },
  'sqlite': {
    name: 'SQLite',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support Status',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'steamos': {
    name: 'SteamOS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        altGoodText: 'In Production',
        altBadText: 'Discontinued',
      },
      'cycle-eol': {
        header: 'Support',
      },
    },
  },
  'unity': {
    name: 'Unity',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      }
    },
  },
  'vue': {
    name: 'Vue',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-extended-support': {
        header: 'Commercial Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      }
    },
  },
  'windows': {
    name: 'Microsoft Windows',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Support',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
};
