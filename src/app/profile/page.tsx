import Card from "@/components/Card";


export default function ProfilePage() {


  return (

    <main
      className="
      min-h-screen
      bg-background
      px-6
      py-12
      "
    >


      <div
        className="
        max-w-3xl
        mx-auto
        "
      >



        <Card>


          <div
            className="
            flex
            flex-col
            items-center
            text-center
            "
          >



            {/* Avatar */}

            <div
              className="
              w-24
              h-24
              rounded-full
              bg-primary
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-foreground
              "
            >
              I
            </div>





            <h1
              className="
              mt-5
              text-3xl
              font-bold
              text-foreground
              "
            >
              Ipsee Malla
            </h1>



            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Software Developer
            </p>



          </div>








          {/* Profile Details */}


          <div
            className="
            mt-10
            space-y-5
            "
          >


            <div
              className="
              flex
              justify-between
              border-b
              border-slate-100
              pb-4
              "
            >

              <span className="text-slate-500">
                Email
              </span>


              <span className="font-medium text-foreground">
                user@email.com
              </span>


            </div>





            <div
              className="
              flex
              justify-between
              border-b
              border-slate-100
              pb-4
              "
            >

              <span className="text-slate-500">
                Gender
              </span>


              <span className="font-medium text-foreground">
                FEMALE
              </span>


            </div>






            <div
              className="
              flex
              justify-between
              border-b
              border-slate-100
              pb-4
              "
            >

              <span className="text-slate-500">
                Member Since
              </span>


              <span className="font-medium text-foreground">
                July 2026
              </span>


            </div>





            <div
              className="
              flex
              justify-between
              "
            >

              <span className="text-slate-500">
                Total Tasks
              </span>


              <span className="
              font-medium
              text-foreground
              "
              >
                12
              </span>


            </div>



          </div>



        </Card>




      </div>


    </main>

  );

}