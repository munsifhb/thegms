import React from 'react'

export default function Singup() {
  
    const myStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbWF0ZSUyMGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div>
        <section style={myStyle} className="h-svh w-full">
            <div className="bg-emerald-700/40 py-20 px-10 h-svh">
            <form className='w-2/4 rounded-md mx-auto sm:w-full md:w-2/4' action="" method="post">
            <fieldset className="border-t-2 border-gray-50/80">
                <legend className="text-2xl text-center bg-emerald-700 p-2 rounded-sm text-gray-50">Sign-up</legend>
            </fieldset>
            </form>
            </div>
        </section>
    </div>
  )
}
