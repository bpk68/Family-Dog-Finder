import React from 'react';
import { NavLink as Link } from 'react-router-dom';

// Components
import Layout from '../components/Layout';

// Constants
import ROUTES from '../constants/routes';

export default props => {

    return (
        <Layout>
            <h1 className="font-heading text-4xl pb-2 mt-2">About Ruff Guides</h1>
            <p className="pb-4">Did you know that one of the biggest factors in a dog's behaviours is the owner and how they train (or don't train) them, as well as the breed of dog you choose?</p>
            <p className="pb-4">
                Through subtle cues and accidental rewards or admonishments, you can unknowingly train your pooch in all sorts of unwanted behaviours. What's more, this is usually coupled with families choosing a breed that isn't well suited
                to them, their family needs, situation, lifestyle, activity levels and more.
            </p>
            <p className="pb-4">
                For example, have you ever seen a family of couch potatoes who've bought a husky because it looked cute? It usually ends in tears because breeds such as Huskys require huge amounts of exercise. If this is not given, the energy can come out
                in unwanted ways such as destructive behaviours, anxiety, and even aggression in the worst cases.
            </p>
            <h2 className="font-heading text-3xl pb-2 mt-2">How can Ruff Guides help?</h2>
            <p className="pb-4">
                Ruff Guides started as a bit of fun, a side project from my full time gig as a developer. However, I quickly saw the potential in how it couple help guide people towards making a more informed choice when it comes to choosing their
                ideal pet. By answering a few simple questions on the <Link to={ROUTES.SEARCH} className="text-primary-100 underline">search page</Link>, Ruff Guides will give you a few suggestions of breeds of dog that could be a perfect breed choice
                for your new family member.
            </p>
            <p className="pb-4">
                By choosing a dog breed that is more suited to your family's situation and set up, you'll find it's better behaved and easier to slot into family life with fewer potential issues along the way.
            </p>
            <h3 className="font-heading text-3xl pb-2 mt-2">What is Ruff Guides not?</h3>
            <p className="pb-4">It's probably worth pointing out a few gotchas and caveats ahead of time:</p>
            <ul className="pb-4 list-disc list-inside leading-relaxed">
                <li>This service is meant to be a bit of a light-hearted guide, not absolute gospel.</li>
                <li>No amount of breed-to-family-matching will replace good training and discipline with your dog.</li>
                <li>You should still do plenty of research on owning a dog in general as well as into the breed you want to own.</li>
                <li>You might also consider adopting a dog from a reputable place, such as <a href="https://www.dogstrust.org.uk/" alt="The Dog's Trust website">The Dog's Trust</a></li>
            </ul>
            <h2 className="font-heading text-3xl pb-2 mt-2">Where do you get your dog data?</h2>
            <p className="pb-4">We use the <a href="https://thedogapi.com/" className="text-primary-100 underline">The Dog API</a> to fetch and collate your results based on the answers you give to our simple questions</p>
        </Layout>
    )
};