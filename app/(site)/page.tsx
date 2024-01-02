import { getProfile } from '@/sanity/sanity.query'
import type { ProfileType } from '@/types'
import Carreer from '@/app/(site)/components/Career'
import { BiFile } from 'react-icons/bi'
import Image from 'next/image'

export default async function Home() {
  const profile: ProfileType[] = await getProfile()

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <>
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.fullName}
                </h1>
                <h2 className="font-semibold text-3xl text-zinc-600">
                  {data.headline}
                </h2>

                <ul className="flex items-center gap-x-6 my-5">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          target="_blank"
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                    >
                      {data.email}
                    </a>
                  </li>
                </ul>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
                <ul className="flex flex-wrap items-center gap-3 my-8">
                  {data.skills.map((skill, id) => (
                    <li
                      key={id}
                      className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src="https://avatars.githubusercontent.com/u/98268946?v=4"
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-yellow-500 text-zinc-950 border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <BiFile className="text-base" /> Download CV
                  </a>
                </div>
              </div>
            </>
          ))}
      </section>
      <Carreer />
    </main>
  )
}
