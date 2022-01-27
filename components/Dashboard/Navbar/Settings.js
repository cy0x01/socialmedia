import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes" 
import { Menu, Transition, MoonIcon, SunIcon } from '@headlessui/react'
import { CogIcon } from '@heroicons/react/outline'

function SettingsDropdown() {

  const { theme, setTheme } = useTheme()    

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const ButtonChanger = () => {
        if (!mounted) return null
        setTheme( theme === 'dark' ? 'light' : 'dark') 
    } 

  const themeText = () => {
    if (theme === 'dark') {
      return (
        <p>
          <SunIcon 
                // role='button'
                className='h-5 w-5 text-yellow-400'
          />
          { theme } Mode
        </p>
      )
    }
    else {
      return (
        <p>
          <MoonIcon
              // role='button'
              className='h-4 w-4 text-blue-600'
          />
          { theme } Mode
        </p>
      )
    }
  }

  function ThemeSwitcher() {
    return(
      <button onClick={ButtonChanger}>
        { themeText }
      </button>
    )
  }

  return (
    <Menu as='div' className='relative'>

      
      <Menu.Button as='button' className='hover:animate-spin-slow'> <CogIcon className='h-5 w-5' /> </Menu.Button>
      
      {/* Use the Transition component. */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className='absolute right-0 p-2 bg-gray-300/60 rounded mt-1 w-32 text-left text-gray-900'>
          <Menu.Item >
            <a className='hover:bg-gray-300/40 p-1 rounded block text-xs'>Profile</a>
          </Menu.Item>
          <Menu.Item>
            <a className='hover:bg-gray-300/40 p-1 rounded block text-xs'>Edit Profile</a>
          </Menu.Item>
          <Menu.Item>
            <a className='hover:bg-gray-300/40 p-1 rounded block text-xs'>Account Settings</a>
          </Menu.Item>
          <Menu.Item>
            <ThemeSwitcher />
          </Menu.Item>
          <Menu.Item>
          <a className='hover:bg-gray-300/40 p-1 rounded block text-xs'>Logout</a>
          </Menu.Item>

        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default SettingsDropdown