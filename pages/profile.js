import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Profile() {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    console.log('isLoggedIn', liff.isLoggedIn());
    if (liff.isLoggedIn()) {
        const profile = await liff.getProfile()
        console.log('profile', profile);
        setProfile(profile)
    }

  }, [profile.userId])

  return (
    <section>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>Profile</h1>
      <div>
        {profile.pictureUrl && <Image
          src={profile.pictureUrl}
          alt={profile.displayName}
          width={500}
          height={500}
        />}
        <div>Name: {profile.displayName}</div>
      </div>
    </section>
  )
}
