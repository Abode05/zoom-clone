"use client";
import { sidebarLinks } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
  return (
      <div className='flex flex-col sticky top-0 left-0 justify-between 
      bg-dark-1 w-fit p-6 pt-28 text-white max-sm:hidden lg:w-[264px]

    
    '>
          <div className="flex flex-col flex-1 gap-6">
              {sidebarLinks.map((item,index) => {
                  const isactive = pathname == item.route || pathname.startsWith(`${item.route}/`);
                  return (
                      <Link
                          key={index}
                          href={item.route}
                          className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-1': isactive })}
                      >
                          <Image
                              src={item.imgURL}
                              alt='img side bar'
                              width={24}
                              height={24}
                          />
                          <p className='text-lg font-semibold max-lg:hidden'>{ item.label}</p>
                      </Link>
                  );

              })}
        </div>
    </div>
  )
}

export default Sidebar
