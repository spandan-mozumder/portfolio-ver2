import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      {(DATA.name || DATA.description || DATA.avatarUrl || DATA.initials) && (
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-4 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                {DATA.name && (
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                )}
                {DATA.description && (
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                )}
              </div>
              {(DATA.avatarUrl || DATA.initials) && (
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border">
                    {DATA.avatarUrl &&
                      (typeof DATA.avatarUrl === "string" ? (
                        <AvatarImage
                          alt={DATA.name ?? "avatar"}
                          src={DATA.avatarUrl}
                        />
                      ) : (
                        <div className="aspect-square h-full w-full">
                          <Image
                            src={DATA.avatarUrl}
                            alt={DATA.name ?? "avatar"}
                          />
                        </div>
                      ))}
                    {DATA.initials && (
                      <AvatarFallback>{DATA.initials}</AvatarFallback>
                    )}
                  </Avatar>
                </BlurFade>
              )}
            </div>
          </div>
        </section>
      )}
      {DATA.summary && (
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      )}
      {DATA.work && DATA.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl ?? ""}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title ?? ""}
                  href={work.href ?? "#"}
                  badges={work.badges}
                  period={`${work.start ?? ""} - ${work.end ?? "Present"}`}
                  description={work.description ?? ""}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
      {DATA.education && DATA.education.length > 0 && (
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href ?? "#"}
                  logoUrl={education.logoUrl ?? ""}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree ?? ""}
                  period={`${education.start ?? ""} - ${education.end ?? ""}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
      {DATA.skills && DATA.skills.length > 0 && (
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {DATA.projects && DATA.projects.length > 0 && (
        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <p className="text-muted-foreground md:text-lg">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-6">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href ?? "#"}
                    key={project.title}
                    title={project.title}
                    description={project.description ?? ""}
                    dates={project.dates ?? ""}
                    tags={project.technologies ?? []}
                    image={project.image}
                    video={project.video}
                    links={project.links?.map((l) => ({
                      icon: (l as any).icon ?? null,
                      type: (l as any).type ?? (l as any).title ?? "",
                      href: (l as any).href ?? "#",
                    }))}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {DATA.hackathons && DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="text-xl font-bold">Hackathons</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="text-muted-foreground md:text-lg">
                During my time in university, I attended{" "}
                {DATA.hackathons.length}+ hackathons. People from around the
                country would come together and build incredible things in 2-3
                days. It was eye-opening to see the endless possibilities
                brought to life by a group of motivated and passionate
                individuals.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l mt-6">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description ?? ""}
                      location={project.location ?? ""}
                      dates={project.dates ?? ""}
                      image={project.image}
                      links={project.links?.map((l) => ({
                        icon: l.icon ?? null,
                        title: l.title ?? (l as any).type ?? "",
                        href: l.href ?? "#",
                      }))}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )}
      {DATA.contact && Object.keys(DATA.contact).length > 0 && (
        <section id="contact">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <h2 className="text-xl font-bold">Get in Touch</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 19}>
              <p className="text-muted-foreground md:text-lg">
                {(() => {
                  const xUrl = DATA.contact?.social?.X?.url;
                  if (xUrl) {
                    return (
                      <>
                        Want to chat? Just shoot me a dm{" "}
                        <Link
                          href={xUrl}
                          className="text-blue-500 hover:underline"
                        >
                          with a direct question on twitter
                        </Link>{" "}
                        and I&apos;ll respond whenever I can. I will ignore all
                        soliciting.
                      </>
                    );
                  }
                  return "If you'd like to reach out, check my social links or email listed on the site.";
                })()}
              </p>
            </BlurFade>
          </div>
        </section>
      )}
    </main>
  );
}
