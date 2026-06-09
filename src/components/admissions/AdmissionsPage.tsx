import AdmissionsCTA from "./AdmissionsCTA";
import AdmissionsHero from "./AdmissionsHero";
import ApplicationProcess from "./ApplicationProcess";
import RequiredDocuments from "./RequiredDocuments";

const steps = [
  {
    number: "1",
    title: "Apply",
    description: "Complete the online application form.",
  },
  {
    number: "2",
    title: "Submit Documents",
    description: "Provide the required supporting documents.",
  },
  {
    number: "3",
    title: "Review",
    description: "The admissions team reviews your application.",
  },
  {
    number: "4",
    title: "Decision",
    description: "Applicants are notified of the admission decision.",
  },
  {
    number: "5",
    title: "Enrollment",
    description: "Accepted students complete enrollment.",
  },
];

export default function AdmissionsPage() {
  return (
    <main id="admissions-top">
      <AdmissionsHero />
      <ApplicationProcess steps={steps} />
      <RequiredDocuments/>
      <AdmissionsCTA/>
    </main>
  );
}