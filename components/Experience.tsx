import { GlareCard } from "./ui/GlareCard"
import { workExperience } from "@/data"

const Experience = () => {
  return (
    <div id="experience">
      <h2 className="text-center text-3xl font-bold m-10">Work Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-xs sm:max-w-none sm:self-center">
        {workExperience.map((item, i) => (
          <GlareCard key={i} className="p-5">
            <h2 className="text-lg font-bold break-words">{item.title}</h2>
            <h3 className="break-words">{item.company}</h3>
            <p className="text-sm text-gray-400 break-words">{item.date}</p>
            <p className="text-base mt-2 break-words">{item.desc}</p>
            {item.links && Object.entries(item.links).map(([label, url], index) => (
              <>
                <br/>
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="break-words pointer-events-auto z-10">
                  {label}: {url}
                </a>
              </>
            ))}
          </GlareCard>
        ))}
      </div>
    </div>
  )
}

export default Experience;