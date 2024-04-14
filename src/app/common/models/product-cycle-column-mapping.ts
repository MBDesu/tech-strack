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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-python-version': undefined,
      'cycle-aux-spark-version': undefined,
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-upgrade-version': undefined,
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
  'ansible': {
    name: 'Ansible',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-ansible-core-version': undefined,
      'cycle-aux-python-versions-control-node': undefined,
      'cycle-aux-python-versions-managed-node': undefined,
      'cycle-aux-powershell-versions-managed-node': undefined,
    },
  },
  'ansible-core': {
    name: 'Ansible Core',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-python-versions-control-node': undefined,
      'cycle-aux-python-versions-managed-node': undefined,
      'cycle-aux-powershell-versions-managed-node': undefined,
    },
  },
  'antix': {
    name: 'antiX Linux',
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
  'apache': {
    name: 'Apache HTTP Server',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Hop',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-activemq': {
    name: 'Apache ActiveMQ',
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
  'apache-airflow': {
    name: 'Apache Airflow',
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
        header: 'Limited Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-camel': {
    name: 'Apache Camel',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-java-versions': {
        header: 'Java Support',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Bug and Security Fixes',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-cassandra': {
    name: 'Apache Cassandra',
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
  'apache-groovy': {
    name: 'Apache Groovy',
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
        header: 'Bug and Security Fixes',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-hadoop': {
    name: 'Apache Hadoop',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Bug and Security Fixes',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-hop': {
    name: 'Apache Hop',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-kafka': {
    name: 'Apache Kafka',
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
        header: 'Confluent Platform Standard End of Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'apache-spark': {
    name: 'Apache Spark',
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
  'apache-struts': {
    name: 'Apache Struts',
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
  'api-platform': {
    name: 'API Platform',
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
  'apple-watch': {
    name: 'Apple Watch',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        altGoodText: 'In Production',
        invert: true,
      },
      'cycle-eol': {
        header: 'Supported',
      },
    },
  },
  'arangodb': {
    name: 'ArangoDB',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'argo-cd': {
    name: 'Argo CD',
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
  'artifactory': {
    name: 'Artifactory',
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
  'aws-lambda': {
    name: 'AWS Lambda',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Standard Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Support',
      },
    },
  },
  'azul-zulu': {
    name: 'Azul Zulu',
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
        header: 'Extended Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'azure-devops-server': {
    name: 'Azure DevOps Server',
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
  'azure-kubernetes-service': {
    name: 'Azure Kubernetes Service',
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
    },
  },
  'bazel': {
    name: 'Bazel',
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
  'beats': {
    name: 'Elastic Beats',
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
  'bellsoft-liberica': {
    name: 'Bellsoft Liberica JDK',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Public Support',
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
  'blender': {
    name: 'Blender',
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
        header: 'Critical Bug Fixes',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'bootstrap': {
    name: 'Bootstrap',
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
        header: 'Critical Support',
        invert: true,
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
  'bun': {
    name: 'Bun',
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
  'cakephp': {
    name: 'CakePHP',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-supported-php-versions': undefined,
    },
  },
  'centos': {
    name: 'CentOS',
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
  'centos-stream': {
    name: 'CentOS Stream',
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
  'centreon': {
    name: 'Centreon',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Phase 1 Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Phase 2 Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'cert-manager': {
    name: 'cert-manager',
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
  'cfengine': {
    name: 'CFEngine',
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
  'chef-infra-server': {
    name: 'Chef Infra Server',
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
  'citrix-vad': {
    name: 'Citrix Virtual Apps and Desktops',
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
        header: 'Support',
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
  'clamav': {
    name: 'ClamAV',
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
  'cockroachdb': {
    name: 'CockroachDB',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Maintenance Support',
      },
      'cycle-eol': {
        header: 'Assistance Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'composer': {
    name: 'Composer',
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
  'confluence': {
    name: 'Confluence',
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
  'consul': {
    name: 'Hashicorp Consul',
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
  'containerd': {
    name: 'containerd',
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
        header: 'Extended Support',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'contao': {
    name: 'Contao',
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
  'cos': {
    name: 'Google Container-Optimized OS (COS)',
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
  'couchbase-server': {
    name: 'Couchbase Server',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Full Maintenance',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'craft-cms': {
    name: 'Craft CMS',
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
  'dbt-core': {
    name: 'dbt Core',
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
        header: 'Critical Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'debian': {
    name: 'Debian',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Debian Security Support',
      },
      'cycle-extended-support': {
        header: 'Debian LTS',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'dependency-track': {
    name: 'Dependency-Track',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'devuan': {
    name: 'Devuan',
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
  'django': {
    name: 'Django',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-python-versions': {
        header: 'Python',
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
  'docker-engine': {
    name: 'Docker Engine',
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
  'drupal': {
    name: 'Drupal',
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
      },
    },
  },
  'drush': {
    name: 'Drush',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-supported-php-versions': undefined,
      'cycle-aux-supported-drupal-versions': undefined,
    },
  },
  'eclipse-jetty': {
    name: 'Eclipse Jetty',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Community Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
        invert: true,
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-min-jvm-version': undefined,
      'cycle-aux-servlet-version': undefined,
      'cycle-aux-jsp-version': undefined,
    },
  },
  'eclipse-temurin': {
    name: 'Eclipse Temurin',
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
  'elasticsearch': {
    name: 'Elasticsearch',
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
  'elixir': {
    name: 'Elixir',
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
  'emberjs': {
    name: 'Ember',
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
  'envoy': {
    name: 'Envoy',
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
  'erlang': {
    name: 'Erland',
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
  'etcd': {
    name: 'etcd',
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
  'eurolinux': {
    name: 'EuroLinux',
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
  'exim': {
    name: 'Exim',
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
  'fairphone': {
    name: 'Fairphone',
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
        altGoodText: 'In Production',
        invert: true,
      },
      'cycle-support': {
        header: 'Active Major Updates',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Updates',
      },
    },
  },
  'fedora': {
    name: 'Fedora Linux',
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
  'ffmpeg': {
    name: 'FFmpeg',
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
  'filemaker': {
    name: 'FileMaker Platform',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-eol': {
        header: 'Support',
      },
    },
  },
  'firefox': {
    name: 'Firefox',
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
  'flux': {
    name: 'Flux',
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
  'fortios': {
    name: 'FortiOS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'End of Engineering Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'End of Support',
      },
    },
  },
  'freebsd': {
    name: 'FreeBSD',
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
  'gerrit': {
    name: 'Gerrit',
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
  'gitlab': {
    name: 'GitLab',
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
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'go': {
    name: 'Go',
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
  'goaccess': {
    name: 'GoAccess',
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
  'godot': {
    name: 'Godot',
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
  'google-kubernetes-engine': {
    name: 'Google Kubernetes Engine',
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
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'gorilla': {
    name: 'Gorilla Toolkit',
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
  'graalvm': {
    name: 'GraalVM',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Maintenance',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'gradle': {
    name: 'Gradle',
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
        header: 'Critial Bug and Security Fixes',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'grafana': {
    name: 'Grafana',
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
  'grails': {
    name: 'Grails Framework',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Development',
        invert: true,
      },
      'cycle-eol': {
        header: 'Active Maintenance',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'graylog': {
    name: 'Graylog',
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
  'gstreamer': {
    name: 'GStreamer',
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
  'haproxy': {
    name: 'HAProxy',
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
  'hashicorp-vault': {
    name: 'Hashicorp Vault',
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
  'hbase': {
    name: 'Apache HBase',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Service Status',
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
  'ibm-aix': {
    name: 'IBM AIX',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Service Pack Support (EoSPS)',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ibm-i': {
    name: 'IBM iSeries',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Service Pack Support (EoSPS)',
      },
      'cycle-extended-support': {
        header: 'Extended Life Cycle Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ibm-semeru-runtime': {
    name: 'IBM Semeru Runtime',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Service (EOS)',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'icinga-web': {
    name: 'Icinga Web',
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
  'intel-processors': {
    name: 'Intel Processors',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        altGoodText: 'In Production',
        altBadText: 'Discontinued',
      },
      'cycle-eol': {
        header: 'Active Support',
      },
    },
  },
  'internet-explorer': {
    name: 'Internet Explorer',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security and Technical Support',
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
      'cycle-aux-supported-angular-versions': undefined,
      'cycle-aux-supported-react-versions': undefined,
      'cycle-aux-supported-vue-versions': undefined,
    },
  },
  'ios': {
    name: 'Apple iOS',
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
  'ipad': {
    name: 'Apple iPad',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        altGoodText: 'In Production',
        invert: true,
      },
      'cycle-eol': {
        header: 'Supported',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ipados': {
    name: 'Apple iPadOS',
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
  'iphone': {
    name: 'Apple iPhone',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-ios-versions': {
        header: 'Supported iOS',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
        altGoodText: 'In Production',
        invert: true,
      },
      'cycle-eol': {
        header: 'Supported',
      },
    },
  },
  'isc-dhcp': {
    name: 'ISC DHCP',
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
  'istio': {
    name: 'Istio',
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
  'jekyll': {
    name: 'Jekyll',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Active Development',
        invert: true,
      },
      'cycle-eol': {
        header: 'Active Maintenance',
      },
      'cycle-latest': {
        header: 'Latest',
      },
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
  'jhipster': {
    name: 'JHipster',
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
  'jira-software': {
    name: 'Jira Software',
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
  'joomla': {
    name: 'Joomla!',
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
  'jquery': {
    name: 'jQuery',
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
  'jreleaser': {
    name: 'JReleaser',
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
  'kde-plasma': {
    name: 'KDE Plasma',
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
        header: 'Critial Bug Fixes',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'keda': {
    name: 'KEDA',
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
  'keycloak': {
    name: 'Keycloak',
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
  'kibana': {
    name: 'Kibana',
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
  'kirby': {
    name: 'Kirby',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-php-versions': {
        header: 'Supported PHP',
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
  'kong-gateway': {
    name: 'Kong Gateway',
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
      'cycle-extended-support': {
        header: 'Enterprise Support',
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
  'kubernetes': {
    name: 'Kubernetes',
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
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'laravel': {
    name: 'Laravel',
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
  'libreoffice': {
    name: 'LibreOffice',
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
  'lineageos': {
    name: 'LineageOS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-android-versions': {
        header: 'Android Version',
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
  'linux': {
    name: 'Linux Kernel',
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
  'linuxmint': {
    name: 'Linux Mint',
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
  'log4j': {
    name: 'Apache Log4j',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Supported',
        invert: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'logstash': {
    name: 'Logstash',
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
  'looker': {
    name: 'Looker',
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
    },
  },
  'lua': {
    name: 'Lua',
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
  'mageia': {
    name: 'Mageis',
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
  'magento': {
    name: 'Magento',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Bug Fix Maintenance',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Maintenance',
      },
      'cycle-extended-support': {
        header: 'Adobe Commerce End of Software Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'maven': {
    name: 'Apache Maven',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Support',
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
  'solr': {
    name: 'Apache Solr',
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
  'terraform': {
    name: 'Hashicorp Terraform',
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
  'tomcat': {
    name: 'Apache Tomcat',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-min-java-version': undefined,
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
  'zookeeper': {
    name: 'Apache ZooKeeper',
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
}
