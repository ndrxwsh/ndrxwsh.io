import Image from 'next/image';



import Map from '~/components/Map'

export default function Home() {
  return (
    <div>
      <Map lat={55.7879} lng={49.1233} />
    </div>
  )
}