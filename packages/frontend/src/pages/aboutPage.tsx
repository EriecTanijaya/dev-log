import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";

export function AboutPage() {
	return (
		<div>
			<Header />
			<Main className="p-3 flex flex-col gap-4 mb-16">
				<h1 className="text-3xl font-bold">What is this?</h1>
				<p>
					This is the web app project that i create mainly to learn tailwindcss,
					explore the css styling and React. I will post some of my writings
					about the projects i created, media that i would like to share with
					you.
				</p>

				<h1 className="text-3xl font-bold">Why i created this?</h1>
				<p>
					The reasons why i create this is to learn a bit about tailwindcss,
					where im using the reference from this dribble, i may not replicate
					all of the features there, but i learned some cool stuff such as
					scroll snapping, lightbox, and small thing such as scroll progress. I
					also learn a bit about Docker.
				</p>
				<p>
					Since im initially working professionally as the backend engineer, i
					want to learn more about the frontend so that i able to become more
					useful in this software development fields, where the AI has been
					frequently used anywhere, even my non-techie friends also use the AI
					in the daily basis. So im thinking if i able to be more "generalist"
					in this field, i could use AI to helps me elevate my progress in
					learning and doing much stuff better than before
				</p>

				<h1 className="text-3xl font-bold">How did i created this?</h1>
				{/** todo: create blog post about how to create this */}
				<p>
					This web app is built on top of the Bun as the web server, and React
					as the UI library for the page and components for frontend. I use the
					Bun feature where it can bundled for me the HTML file, and serve it
					through the web server. I will post the detailed steps on one of my
					blog post
				</p>

				<h1 className="text-3xl font-bold">What next?</h1>
				<p>
					I hope this app could inspires or helps you to build things too, and
					dont forget to stay curious, since the curiosity is what drives me to
					learn and create this app!
				</p>
				<p>
					When we were a little, we dont know what is like to running and
					jumping until we hurt ourselves, but we did it anyway, so that we
					learned that we must aware of our surrounding when we running and
					jumping. If we didnt even try, we may not know the happy feeling when
					the adrenaline kicks in when we running fast or jumping so many times.
				</p>
				<p>
					Yes, there is a risk, but life is about taking risk, and learn from
					it. As long the action that you take has the risk that less than from
					the reward it will gain, why wont you try first?
				</p>
			</Main>
			<Footer />
		</div>
	);
}
