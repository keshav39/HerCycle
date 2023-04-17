import React from "react";

function Profile() {
  return (
    <section>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
            <div class="relative">
              <div class="w-48 h-48 bg-pink-100 mx-auto rounded-full absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium mt-24 text-gray-700 pt-6">
              Jessica Jones, <span class="font-light text-gray-500">27</span>
            </h1>
            <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>
            <p class="mt-8 text-gray-500">randomemail@email.com</p>
          </div>
          <div class="mt-12 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button class="text-pink-500 py-2 px-4  font-medium mt-12">
              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button class="text-white py-2 px-4 uppercase rounded bg-pink-400 hover:bg-pink-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Sync with Watch
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
