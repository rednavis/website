const cases = [
  {
    id: `commercial-cloud-based-application`,
    image: '4.png',
    tag: `web`,
    name: `Commercial cloud based application`,
    descr: `for cluster configurations and deployments`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `,
    domain: `Finance, Cloud`,
    challenge: `Develop new commercial cloud-based application for cluster configurations and deployments`,
    solutions: [
      `To solve all challenges and make the platform highly available and reliable for users all over the world we develop a unique solution based on the latest modern technologies and cloud platforms such as AWS. This platform fully automates the process of clusters provisioning for Big Data processing. Also, a highly secure solution was developed to provide the billing and financial aspects of the platforms accordingly to the latest standards and requirements`,
    ],
    technologies: `Java 8, Akka (distributed data, clustering, streams, Alpaka, HTTP), Vaadin 14, Google Polymers 3.0, JDBI, Google Guice. d3.js, Docker, Kubernetes, AWS ECS, AWS EKS, Jenkins, Blue Ocean pipelines, AWS CloudFormation, MySQL, Mongo, Amazon Web Services`
  },

  {
    id: `big-data-AI-and-RPA-platform`,
    image: '2.png',
    tag: `web`,
    name: `Big Data, AI and RPA platform `,
    descr: `for users without special technical background`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `,
    domain: `Big Data, AI and RPA (robotic process automation)`,
    challenge: `Develop new platform which will allow using ELT, AI, and RPA for users without special technical background`,
    solutions: [
      `To bring such platform to life we develop a complex solution which allows executing fast and distributed calculation base on 'Actor' paradigm. It allows us to build from scratch new compiler for acyclic graphs and includes user-provided AI models on the fly. This platform combines notions of ELT, AI, and RPA and makes possible Big Data processing for users without a special technical background.`,
      `As part of the solution new visualization platform was built for:`
    ],
    solutionsList: [
      `Neural networks building and training`,
      `Graph visualization`,
      `Cluster monitoring, etc`
    ],
    
    technologies: `Java 8, Scala 2, Akka (distributed data, clustering, streams, Alpaka, http), Vaadin 14, Google Polymers 3.0, JDBI, Google Guice. d3.js, Docker, Kubernetes, AWS ECS, AWS EKS, Jenkins, Blue Ocean pipelines, AWS CloudFormation, MySQL, Mongo, Amazon Web Services, on-premises`
  },

  {
    id: `platform-for-online-lending`,
    image: '3.png',
    tag: `web`,
    name: `Platform for online landing`,
    descr: `highly available online investment platform`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `, 
    domain: `Finance`,
    challenge: `Develop highly available online investment platform`,
    solutions: [
      `Microservices approach based on the Play framework was implemented to provide high availability and reliability for online investment platforms. To meet high-security requirements multiple integrations with the outer financial platform were developed. Asynchronous communications build on top of the Actor paradigm from Akka framework and non-blocking API this investment platform to be one of the fastest and most secure platforms on the regional market.`,
    ],
    technologies: `Java 10, Akka (clustering, http, streams), Play, MyBatis, Docker, Kubernetes, Jenkins, ansible, PostgreSQL, Digital Ocean`
  },

  {
    id: `price-optimization-engine`,
    image: '1.png',
    tag: `web`,
    name: `Price-optimization engine`,
    descr: `allows customers to quickly optimize prices to their banking products`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `,
    domain: `Finance`,
    challenge: `Distributed Price-optimization engine`,
    solutions: [
      `A high level of competition in the financial market requires a fast and scalable platform that can respond quickly to the market trend. To allow customers to quickly optimize prices to their banking products (such as loans, deposits and etc) we have developed a distributed platform for bank rates optimization based on the historical data and non-linear models. As part of the solution, cluster-management platform was developed to allow fully automate the process of price-engine scaling on demand.`,
    ],
    technologies: `Java 8, Spring Boot, Spring 5 (Data, Security and etc), Node.js, Hibernate, Consul, RabbitMq, Docker, Jenkins, puppet, MySQL, Mongo, Amazon Web Services, on-premises`
  },

  {
    id: `iot-platform-for-digital-marketing`,
    image: '7.png',
    tag: `mobile`,
    name: `IoT platform for digital marketing`,
    descr: `Highly scalable platform for digital marketing`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `,
    domain: `IOT, Digital marketing `,
    challenge: `Develop cloud based IOT platform for digital marketing `,
    solutions: [
      `Microservices approach based on the Netflix OSS allows us to build a highly scalable platform which is able to support more than 100k remote Android devices. Event driven design was used as a cornerstone of the platform architecture. Multimedia Content Management Engine was developed to provide streaming functionality and allow end-user to create, manage and stream multimedia content to the Android device all over the world from Edgecast CDN`,
    ],
    technologies: `Java 8, Spring Boot, Spring 5 (Data, Security and etc), Netflix OSS, Hibernate, AWS SQS, SNS, Route53, CDN, MQTT, Docker, Bosh, Jenkins, AWS CodeBuild, Pipeline, MySQL, Mongo, DynamoDB, Redis, Amazon Web Services`
  },

  {
    id: `automobile-insurance-platform`,
    image: '5.png',
    tag: `mobile`,
    name: `Automobile insurance platform`,
    descr: `data lake platform for vehicle parts catalogs serving`,
    text: `Over 90% of our developers are Senior level software engineers with international certificates of competence, excellent skills and years of priceless experience. Over 90% of our developers `,
    domain: `Insurance, Auto`,
    challenge: `Develop data lake platform for vehicle parts catalogs serving`,
    solutions: [
      `Accordingly to the requirements platform had to allow integrating information from any vehicle manufacturer provided by various channels. To meet the requirements microservices solution was implemented based on the Event Driven Design and CQRS (Command-Query Responsibility Segregation). Asynchronous communications with graph-oriented approach allowed us to implement a highly extensible solution which can be integrated with most of the vehicle manufacturers all over the world.`,
    ],
    technologies: `Java 8, Spring Boot 2, Spring 5 (Data, Security and etc), Netflix OSS, Hibernate, RabbitMq, Docker, Bosh, Jenkins, Concourse, MySQL, Mongo, HBase, Neo4J, Pivotal Cloud Foundry`
  }
]

export default cases