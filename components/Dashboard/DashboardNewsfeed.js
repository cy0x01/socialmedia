import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsFeed() {
    return (
        <div className='flex flex-wrap'>
            <main className='md:w-2/3 w-full mx-4 md:mx-0'>
                <section className='p-4 bg-gray-800/60 rounded-lg mb-6'>

                    {/* header */}
                    <div className='flex flex-row items-start mb-3'>

                        {/* Image */}
                        <img 
                            src='/rick-roll.jpg'
                            className='h-8 w-8 rounded-full'
                        />
                        
                        <div className='flex-1 ml-2'>
                            {/* name */}
                            <Link href='/'>
                                <h4 className='w-fit'>Rick Roll</h4>
                            </Link>
                            {/* date | privacy */}
                            <p className='text-xs w-fit text-gray-400'>Jan. 1, 2022 at 12:00AM </p>
                        </div>

                        {/* button */}
                        <DotsHorizontalIcon role='button' className='h-5 w-5' />

                    </div>

                    {/* uploaded image here */}
                    <div>

                    </div>

                    {/* body */}
                    <div className='p-2 mb-2 text-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    {/* sections */}
                    {/* counts */}
                    <div className='flex justify-between my-1 text-sm'>
                        <p className='flex items-center'><HeartIcon role='button' className='h-5 w-5 text-red-600 mr-1' /> 1</p>
                        <p>1 Comments</p>
                    </div>
                    {/* selections */}
                    <div className='flex justify-between'>
                        <div className='flex space-x-2'>
                            <HeartIcon role='button' className='h-5 w-5' />
                            <ChatIcon role='button' className='h-5 w-5' />
                            <PaperAirplaneIcon role='button' className='h-5 w-5' />
                        </div>
                        <div>
                            <BookmarkIcon role='button' className='h-5 w-5'/>
                        </div>
                    </div>
                    {/* comments */}
                    <div className='bg-gray-800/60 p-2 mt-2 flex items-start space-x-2'>
                        {/* image */}
                        <div>
                        <img 
                            src='/rick-roll.jpg'
                            className='h-7 w-7 rounded-full'
                        />
                        </div>
                        {/* comment */}
                        <div className='flex flex-col items-start text-sm w-full p-1 rounded bg-blue-900/20'>
                            <p className='font-semibold'>Rick Roll</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae purus. Tempus urna et pharetra pharetra massa massa. </p>
                        </div>
                    </div>
                </section>
            </main>

            <aside className='md:w-1/3 w-full mx-2 md:mx-0 text-sm'>
                <div className='ml-2 mr-2 md:mr-0 p-4 bg-gray-800/80 rounded-lg'>
                    <div className='flex justify-between text-sm'>
                        <h4 className='text-gray-300'>Suggestions For You</h4>
                        <p>See All</p>
                    </div>
                    <div className='my-4 py-2 space-y-2 bg-gray-700/90 px-2 rounded'>
                        <div className='flex justify-between'>
                            <p>Cyryl Surigao</p>
                            <p className='text-blue-500 font-semibold'>Follow</p>
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    )
}
