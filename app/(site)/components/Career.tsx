import Image from 'next/image'
import { getEducational, getJob } from '@/sanity/sanity.query'
import type { EducationalType, JobType } from '@/types'

export default async function Career() {
  let job: JobType[] = await getJob()
  let educational: EducationalType[] = await getEducational()

  job = job.sort(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a, b) => (new Date(b.startDate) as any) - (new Date(a.startDate) as any),
  )

  educational = educational.sort(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (a, b) => (new Date(b.startDate) as any) - (new Date(a.startDate) as any),
  )

  return (
    <section className="mt-32">
      <div className="my-16">
        <h2 className="font-semibold text-4xl mb-4">
          Experiências Profissionais
        </h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job &&
          job.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
              >
                <Image
                  src={data.logo}
                  className="object-cover"
                  alt={`${data.name} logo`}
                  fill
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {data.startDate.toString()} - {data.endDate.toString()}
                </small>
                <p className="text-base text-zinc-400 my-4">
                  {data.description}
                </p>
                <ul className="flex flex-wrap items-center gap-3 mt-8">
                  {data.skills &&
                    data.skills.map((skill, id) => (
                      <li
                        key={id}
                        className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>

      <div className="my-16">
        <h2 className="font-semibold text-4xl mb-4">Experiência Acadêmicas</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {educational &&
          educational.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
              <div className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative">
                <Image
                  src={data.logo}
                  className="object-cover"
                  alt={`${data.name} logo`}
                  fill
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.schoolTitle}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {data.startDate.toString()} - {data.endDate.toString()}
                </small>
                <p className="text-base text-zinc-400 my-4">
                  {data.description}
                </p>
                <ul className="flex flex-wrap items-center gap-3 mt-8">
                  {data.skills &&
                    data.skills.map((skill, id) => (
                      <li
                        key={id}
                        className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
