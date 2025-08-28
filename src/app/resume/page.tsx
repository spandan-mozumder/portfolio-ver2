import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Spandan Mozumder's Resume",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/95 dark:to-muted/20">
      <section id="resume" className="mx-auto w-full max-w-[95vw]">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tighter">Resume</h1>
            <a
              href="/Resume Spandan Mozumder.pdf"
              download="Resume_Spandan_Mozumder.pdf"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Download PDF
            </a>
          </div>

          <div className="w-full">
            <object
              data="/Resume Spandan Mozumder.pdf"
              type="application/pdf"
              width="100%"
              height="900px"
              className="border border-border rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center justify-center h-96 bg-muted rounded-lg">
                <p className="text-muted-foreground mb-4">
                  PDF cannot be displayed in this browser.
                </p>
                <a
                  href="/Resume Spandan Mozumder.pdf"
                  download="Resume_Spandan_Mozumder.pdf"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Download Resume PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </div>
  );
}
