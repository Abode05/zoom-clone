"use client";
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constant'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

const Mopilenav = () => {
      const pathname = usePathname();

  return (
    <section className='w-full max-w-[256px] z-50'>
      <Sheet>
              <SheetTrigger asChild >
                  <Image
                      src="/icons/hamburger.svg"
                      alt="humbergur"
                      width={36}
                      height={36}
                      className='cursor-pointer sm:hidden'
                  />
            </SheetTrigger>
            <SheetContent side="left" className='border-none bg-dark-1 '>
                    <Link
                        href='/' className='flex items-center gap-1'
                    >
                        <Image
                        src='/icons/logo.svg'
                        alt='logo'
                        width={32}
                        height={32}
                        className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold text-white  '>yoop</p>
                  </Link>
                  <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto ">
                      <SheetClose asChild >
                          <section className='flex flex-col pt-16 h-full gap-6 text-white '>
                          {
                              sidebarLinks.map((link) => {
                                  const isactive = pathname == link.route || pathname.startsWith(`${link.route}/`);
                                  return (
                                      <SheetClose key={link.route} asChild>
                                          <Link
                                              href={link.route}
                                              key={link.route}
                                              className={cn('flex gap-4 items-center p-4 rounded-lg  w-full max-w-60', { 'bg-blue-1': isactive })}
                                          >
                                              <Image
                                                  src={link.imgURL}
                                                  alt={link.label}
                                                  width={20}
                                                  height={20}
                                              />
                                              <p className="font-semibold">{link.label}</p>
                                          </Link>
                                      </SheetClose>
                                  );
                              })}
                              </section>
                      </SheetClose>
                  </div>
            </SheetContent>
      </Sheet>

    </section>
  )
}

export default Mopilenav
