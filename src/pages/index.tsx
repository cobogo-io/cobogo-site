import Carrousel from '@/components/Carrousel'
import { useState } from 'react'

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<
    'social' | 'community' | 'launchpad'
  >('community')

  return (
    <div>
      <div className="flex items-center justify-center w-full py-12 lg:py-20 min-h-screen">
        <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center justify-between">
          <Carrousel
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
      </div>
    </div>
  )
}

