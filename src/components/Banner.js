/* eslint-disable jsx-a11y/anchor-is-valid */
// import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div class="relative flex items-center justify-center">
    <div class="carousel">
      <div class="carousel-inner flex space-x-4">
        <div class="carousel-item w-1/3">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwaW1hZ2VzJTIwcG5nfGVufDB8fDB8fHww"
            alt="Image 1"
            class="w-full h-auto object-contain"
          />
        </div>
        <div class="carousel-item w-1/3">
          <img
            src="https://images.unsplash.com/photo-1506197061617-7f5c0b093236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bSUyMGltYWdlcyUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 2"
            class="w-full h-auto object-contain"
          />
        </div>
        <div class="carousel-item w-1/3">
          <img
            src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGltYWdlcyUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3"
            class="w-full h-auto object-contain"
          />
        </div>
        <div class="carousel-item w-1/3">
          <img
            src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGltYWdlcyUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3"
            class="w-full h-auto object-contain"
          />
        </div>
        <div class="carousel-item w-1/3">
          <img
            src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGltYWdlcyUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3"
            class="w-full h-auto object-contain"
          />
        </div>
        {/* <!-- Add more images as needed --> */}
      </div>
    </div>
  
    <div class="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
      Your Banner Text
    </div>
  </div>
  )
}