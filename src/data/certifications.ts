export interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  skillsCovered: string[];
  image?: string;
}

export const certificationsData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Developer — Associate Prep",
    provider: "Amazon Web Services (AWS)",
    date: "Aug 2024",
    credentialId: "AWS-DEV-984201",
    credentialUrl: "https://aws.amazon.com",
    skillsCovered: ["AWS S3", "Lambda", "DynamoDB", "CloudFront", "IAM & Security"],
  },
  {
    id: "cert-2",
    title: "Meta Full-Stack Developer Professional Certificate",
    provider: "Meta via Coursera",
    date: "Mar 2024",
    credentialId: "META-FS-559102",
    credentialUrl: "https://coursera.org",
    skillsCovered: ["React.js", "Django", "REST APIs", "Git & Version Control", "Database Design"],
  },
  {
    id: "cert-3",
    title: "PostgreSQL & Database Engineering Masterclass",
    provider: "Udemy Certified",
    date: "Jan 2024",
    credentialId: "UC-PG-882310",
    credentialUrl: "https://udemy.com",
    skillsCovered: ["Indexing Strategy", "Query Optimization", "Transactions & ACID", "ACID Compliance"],
  },
  {
    id: "cert-4",
    title: "Deep Learning & Neural Networks Fundamentals",
    provider: "DeepLearning.AI",
    date: "Nov 2023",
    credentialId: "DLAI-NN-441098",
    credentialUrl: "https://coursera.org",
    skillsCovered: ["PyTorch", "Convolutional Networks", "Transformer Architectures", "Model Evaluation"],
  },
];
