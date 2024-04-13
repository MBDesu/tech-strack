export interface ColumnDefinition {
  header: string;
  unavailable?: boolean;
  invert?: boolean;
}

export interface ProductDefinition {
  name: string;
  columns: { [key: string]: ColumnDefinition | undefined };
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

};
