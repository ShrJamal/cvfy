import { Cv } from '~/types/cvfy';

export const formSettings: Cv = {
  jobTitle: 'Deputy Director Parks Department',
  name: 'Leslie',
  lastName: 'Knope',
  email: 'lknope@parksdept.com',
  location: 'Pawnee, Indiana',
  phoneNumber: '317-660-2160',
  aboutme:
    "My name is Leslie Knope. I am a passionate, over-achieving government employee who believes the government's #1 job is serving the people. By pairing the right people with the right messaging at the right time, the parks department and your local government can make the world a better place for everyone! I have met Joe Biden, and one day I will become the first female President of the United States.",
  jobSkills: ['Microsoft', 'Word', 'Excel', 'PerfectMind'],
  softSkills: ['Positivity', 'Leadership', 'Public Speaking'],
  languages: [{ lang: 'English', level: '100%' }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'www.MsKnope.com',
  education: [
    {
      title: 'A Environmental and Public Affairs',
      location: 'Indiana University, Bloomington, Indiana',
      from: new Date('1993-09-01'),
      to: new Date('1993-04-01'),
      current: false,
      summary: 'Summa cum Laude',
    },
  ],
  work: [
    {
      title: 'Deputy Director Parks Department',
      location: 'City of Pawnee, Indiana',
      from: new Date('2009-01-01'),
      to: new Date('2012-01-01'),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
    {
      title: 'City Councilor',
      location: 'City of Pawnee, Indiana',
      from: new Date('2012-01-01'),
      to: new Date(),
      current: true,
      summary: `- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
  ],
};
