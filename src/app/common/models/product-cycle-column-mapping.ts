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
  'coldfusion': {
    name: 'Adobe ColdFusion',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Core Support',
      },
      'cycle-extended-support': {
        header: 'Extended Support',
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
  'cortex-xdr': {
    name: 'Palo Alto Networks Cortex XDR Agent',
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
  'dotnet': {
    name: 'Microsoft .NET',
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
  'dotnetfx': {
    name: 'Microsoft .NET Framework',
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
  'esxi': {
    name: 'VMware ESXi',
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
  'fluent-bit': {
    name: 'Fluent Bit',
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
  'kubernetes-csi-node-driver-registrar': {
    name: 'Kubernetes CSI Node Driver Registrar',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-supported-php-versions': undefined,
    },
  },
  'mariadb': {
    name: 'MariaDB',
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
  'mastodon': {
    name: 'Mastodon',
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
  'matomo': {
    name: 'Matomo',
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
        header: 'Long Term Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'mattermost': {
    name: 'Mattermost',
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
  'mediawiki': {
    name: 'MediaWiki',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End-of-Life',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'meilisearch': {
    name: 'Meilisearch',
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
  'memcached': {
    name: 'Memcached',
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
  'micronaut': {
    name: 'Micronaut Framework',
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
  'microsoft-build-of-openjdk': {
    name: 'Microsoft Build of OpenJDK',
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
  'mongodb': {
    name: 'MongoDB Server',
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
  'moodle': {
    name: 'Moodle',
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
  'motorola-mobility': {
    name: 'Motorola Mobility',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Updates',
      },
    },
  },
  'msexchange': {
    name: 'Microsoft Exchange',
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
  'mulesoft-runtime': {
    name: 'Mule Runtime',
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
        header: 'Extended Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'mxlinux': {
    name: 'MX Linux',
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
  'neo4j': {
    name: 'Neo4j',
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
  'netbsd': {
    name: 'NetBSD',
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
  'nextcloud': {
    name: 'Nextcloud',
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
  'nexus': {
    name: 'Nexus Repository OSS',
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
  'nginx': {
    name: 'nginx',
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
  'nix': {
    name: 'nix',
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
  'nixos': {
    name: 'NixOS',
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
  'nokia': {
    name: 'Nokia Mobile',
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
  'nomad': {
    name: 'Nomad',
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
  'numpy': {
    name: 'NumPy',
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
  'nutanix-aos': {
    name: 'Nutanix AOS',
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
  'nutanix-files': {
    name: 'Nutanix Files',
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
  'nutanix-prism': {
    name: 'Nutanix Prism Central',
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
  'nuxt': {
    name: 'Nuxt',
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
  'nvidia': {
    name: 'NVIDIA Driver',
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
  'nvidia-gpu': {
    name: 'NVIDIA GPUs',
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
      'cycle-support': {
        header: 'Active Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security Support',
      },
    },
  },
  'office': {
    name: 'Microsoft Office',
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
    },
  },
  'openbsd': {
    name: 'OpenBSD',
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
  'openjdk-builds-from-oracle': {
    name: 'OpenJDK Builds from Oracle',
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
  'opensearch': {
    name: 'OpenSearch',
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
        header: 'Maintenance Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'openssl': {
    name: 'OpenSSL',
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
      'cycle-extended-support': {
        header: 'Premium Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'opensuse': {
    name: 'openSUSE',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Life',
      },
    },
  },
  'opentofu': {
    name: 'OpenTofu',
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
  'openwrt': {
    name: 'OpenWrt',
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
  'openzfs': {
    name: 'OpenZFS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Critical Bug Fixes',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'opnsense': {
    name: 'OPNsense',
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
  'oracle-apex': {
    name: 'Oracle APEX',
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
  'oracle-database': {
    name: 'Oracle Database',
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
    },
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
  'oracle-linux': {
    name: 'Oracle Linux',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Basic/Premier Support',
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
  'oracle-solaris': {
    name: 'Oracle Solaris',
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
    },
  },
  'ovirt': {
    name: 'oVirt',
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
  'pangp': {
    name: 'Palo Alto Networks GlobalProtect App',
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
        header: 'End-of-Life Date',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'panos': {
    name: 'Palo Alto Networks PAN-OS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End-of-Life Date',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'pci-dss': {
    name: 'PCI-DSS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Acceptance',
      },
    },
  },
  'perl': {
    name: 'Perl',
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
        header: 'Critical Security Patches',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'photon': {
    name: 'VMware Photon',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-kernel-version': {
        header: 'Kernel Version',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Security Support',
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
  'phpbb': {
    name: 'phpBB',
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
  'phpmyadmin': {
    name: 'phpMyAdmin',
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
  'plesk': {
    name: 'Plesk',
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
  'pop-os': {
    name: 'Pop!_OS',
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
    },
  },
  'postfix': {
    name: 'Postfix',
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
  'postmarketos': {
    name: 'postmarketOS',
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
  'powershell': {
    name: 'Microsoft PowerShell',
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
  'prometheus': {
    name: 'Prometheus',
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
  'proxmox-ve': {
    name: 'Proxmox VE',
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
  'puppet': {
    name: 'Puppet',
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
  'qt': {
    name: 'Qt',
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
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'quarkus-framework': {
    name: 'Quarkus',
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
        header: 'RHBQ',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'quasar': {
    name: 'Quasar',
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
        header: 'LTS Support',
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
  'rancher': {
    name: 'Rancher',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'General Availability',
      },
      'cycle-support': {
        header: 'Full Support',
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
  'raspberry-pi': {
    name: 'Raspberry Pi',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-discontinued': {
        header: 'Discontinued',
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
  'readynas': {
    name: 'Netgear ReadyNAS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-eol': {
        header: 'Security Support',
      },
    },
  },
  'red-hat-openshift': {
    name: 'Red Hat OpenShift',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Full Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Maintenance Support',
      },
      'cycle-extended-support': {
        header: 'Extended Update Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'redhat-build-of-openjdk': {
    name: 'Red Hat Build of OpenJDK',
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
  'redhat-jboss-eap': {
    name: 'Red Hat JBoss Enterprise Application Platform',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Full Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Maintenance Support',
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
  'redhat-satellite': {
    name: 'Red Hat Satellite',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'General Availability',
      },
      'cycle-support': {
        header: 'Full Support',
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
  'redmine': {
    name: 'Redmine',
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
  'robo': {
    name: 'Robo',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-supported-php-versions': {
        header: 'PHP Versions',
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
  'rocket-chat': {
    name: 'Rocket.Chat',
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
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'rocky-linux': {
    name: 'Rocky Linux',
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
  'ros': {
    name: 'ROS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Life',
      },
    },
  },
  'ros-2': {
    name: 'ROS 2',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End Of Life',
      },
    },
  },
  'roundcube': {
    name: 'Roundcube Webmail',
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
  'salt': {
    name: 'Salt',
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
        header: 'CVE & Critical Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'samsung-mobile': {
    name: 'Samsung Mobile',
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
        header: 'Security Updates',
      },
    },
  },
  'sapmachine': {
    name: 'SapMachine',
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
  'scala': {
    name: 'Scala',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Current Releases',
        invert: true,
      },
      'cycle-eol': {
        header: 'Maintenance Releases',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'sharepoint': {
    name: 'Microsoft SharePoint',
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
  'shopware': {
    name: 'Shopware',
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
  'silverstripe': {
    name: 'Silverstripe CMS',
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
        header: 'Security Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'slackware': {
    name: 'Slackware Linux',
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
  'sles': {
    name: 'SUSE Linux Enterprise Server',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'General Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Long Term Service Pack Support',
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
  'sonar': {
    name: 'SonarQube',
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
        header: 'Bug and Security Fixes',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'sourcegraph': {
    name: 'Soucegraph',
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
      'cycle-latest': {
        header: 'Latest',
      }
    },
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-supported-java-versions': undefined,
    },
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
      'cycle-latest': {
        header: 'Latest',
      }
    },
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-supported-java-versions': undefined,
      'cycle-aux-supported-jakarta-ee-versions': undefined,
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
  'squid': {
    name: 'Squid',
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
  'surface': {
    name: 'Microsoft Surface',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of Servicing Date',
      },
    },
  },
  'symfony': {
    name: 'Symfony',
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
  'tails': {
    name: 'Tails',
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
  'tarantool': {
    name: 'Tarantool',
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
  'telegraf': {
    name: 'Telegraf',
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
  'traefik': {
    name: 'Traefik',
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
  'twig': {
    name: 'Twig',
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
  'typo3': {
    name: 'TYPO3',
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
        header: 'Extended Long Term Support',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'ubuntu': {
    name: 'Ubuntu',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Hardware & Maintenance',
        invert: true,
      },
      'cycle-eol': {
        header: 'Maintenance & Security Support',
      },
      'cycle-extended-support': {
        header: 'Extended Security Maintenance',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'umbraco': {
    name: 'Unbraco CMS',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Security',
      },
      'cycle-latest': {
        header: 'Latest',
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
  'unrealircd': {
    name: 'UnrealIRCd',
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
  'varnish': {
    name: 'Varnish',
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
  'vcenter': {
    name: 'VMware vCenter Server',
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
    auxTable: {
      'cycle-aux-cycle': undefined,
      'cycle-aux-technical-guidance': undefined,
    },
  },
  'veeam-backup-and-replication': {
    name: 'Veeam Backup & Replication',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'End of Fix',
        invert: true,
      },
      'cycle-eol': {
        header: 'End of Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'visual-cobol': {
    name: 'Visual COBOL',
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
  'visual-studio': {
    name: 'Microsoft Visual Studio',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Active Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'vmware-cloud-foundation': {
    name: 'VMware Cloud Foundation',
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
  'vmware-harbor-registry': {
    name: 'VMware Harbor Registry',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'End of General Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'vmware-srm': {
    name: 'VMware Site Recovery Manager',
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
  'vuetify': {
    name: 'Vuetify',
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
  'wagtail': {
    name: 'Wagtail',
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
  'weechat': {
    name: 'WeeChat',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-eol': {
        header: 'Active Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
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
  'windows-embedded': {
    name: 'Microsoft Windows Embedded',
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
    },
  },
  'windows-server': {
    name: 'Microsoft Windows Server',
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
        header: 'Extended Security Updates',
        unavailable: true,
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'wordpress': {
    name: 'WordPress',
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
        header: 'Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'xcp-ng': {
    name: 'XCP-ng',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-eol': {
        header: 'Support',
      },
      'cycle-latest': {
        header: 'Latest',
      },
    },
  },
  'yarn': {
    name: 'Yarn',
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
  'yocto': {
    name: 'Yocto Project',
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
  'zabbix': {
    name: 'Zabbix',
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
  'zerto': {
    name: 'Zerto',
    columns: {
      'cycle-cycle': {
        header: 'Release',
      },
      'cycle-release-date': {
        header: 'Released',
      },
      'cycle-support': {
        header: 'General Support',
        invert: true,
      },
      'cycle-eol': {
        header: 'Critical Support',
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
