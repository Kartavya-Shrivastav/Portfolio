import TitleHeader from '../components/TitleHeader';
import { expCards } from "../constants/words";
import HighlightBorderCard from '../components/HighlightBorderCard.jsx';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.resgiterPlugin(ScrollTrigger);

const ExperienceSection = () => {
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader title="Professional Work Experience" sub="💼 My Career Overview" />
            
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    // experience cards
                    {expCards.map((card) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                            <HighlightBorderCard card={card}>
                                <div>
                                    <img src={card.imgPath} alt={card.title} />
                                </div>
                            </HighlightBorderCard>
                            </div>

                            // experience timeline
                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline' />
                                        <div className='gradient-line w-1 h-full' />
                                    </div>

                                    <div>
                                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                        <p className='my-5 text-white-50'>🗓️ {card.date}</p>
                                        <p className='text-[#839cb5] italic'>Responsibilities</p>
                                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                            {card.responsibilities.map((responsibility) => (
                                                <li key={responsibility} className='text-lg'>
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection