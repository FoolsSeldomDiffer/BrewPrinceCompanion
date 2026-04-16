import { type Recipe } from './types';

const initialRecipe: Recipe = {
  id: "original",
  title: "The Brew of Nightmares",
  intro: "Few realise that a myriad of diseases and magical ailments can be counteracted by one another. In the distant lands to the East, many alchemists brew potions that stir up nightmares in order to overpower other undesirable afflictions - after all, nightmares don't end lives (often)...",
  steps: [
    {
      title: "The Purple Bushel:",
      description: "Seek the scent of serenity in a field of lilac blooms. Pluck the sprigs that soothe one's sleep and cast them into the seething liquid - this calming base will provide a counterpart for the more volatile ingredients to come.",
      ingredient: "lavender",
    },
    {
      title: "A Leap of Faith:",
      description: "Add two limbs of the croaker from the muddy pool, she who leaps when the moon hides behind the clouds.",
      ingredient: "frogleg"
    },
    {
      title: "Ominous Omen:",
      description: "An ill omen - some avian critters mean naught but misfortune and dread to the common folk. One such sliver of violet should prove a worthy reagent for this potent brew.",
      ingredient: "raven_feather"
    },
    {
      title: "Dreaded Reptilians Life Essence :",
      description: "No creature generates fear quite as much as the mighty dragon. To captivate horror in our brew, three drops of its scaly red blood should suffice.",
      ingredient: "dragon_blood" // 3 keer
    },
    {
      title: "Contrasting Calm",
      description: "What was once used as a base for the horrors to come, will now top off this concoction with a hint of grace - a false portent of hope. ",
      ingredient: "lavender"
    }
  ],
  additionalInstructions: [
    "Stir three times counter-clockwise after each ingredient.",
    "Ignore any and all hallucinations, visions and whispers that may arise during the brewing process.",
    "When the steam turns black and the liquid hums, the brew is ready for consumption."
  ],
  solutionColor: "#080001" // Dark
};

const recipe285913: Recipe = {
  id: "285913",
  title: "The Flask of Frozen Time", // lichtblauw: ["Bat Wing", "Frog Leg", "Bat Wing", "Frog Leg", "Lavender", "Dragon Blood"]
  intro: "Where traditional medicine fails, arcane remedies can provide an alternative route to relief. When magic can not be used to cure the relevant ailments, one can always halt the progress of any disease using borrowed time.",
  steps: [
    {
      title: "Fragments of Freedom:",
      description: "In order to halt all passage of time, one must first capture the essence of freedom. Freedom is bountiful in the animal kingdom - we must seek aspects of the creatures that roam the marshes and caves. We should add two elements of each creature, intertwined each and starting with the creature that needs no vision to experience true sensation.",
      ingredient: "batwing, frogleg, batwing, frogleg."
    },
    {
      title: "A Pluck of Luscious Life:",
      description: "In order to captivate the beasts attention, we need to entice them with a alluring and equally calming scent. An odorant wild flower will do just the trick.",
      ingredient: "lavender"
    },
    {
      title: "The Fiery Seal:",
      description: "When violet is submerged in animalistic freedom, we need a powerful reagent for temporal containment. To seal our flask with crystalized time, a material resembling fiery hot magma must be used to ellicit the correct alchemical reaction.",
      ingredient: "dragon_blood"
    }
  ],
  additionalInstructions: [
    "Handle every ingredient with the utmost care - time is a frail thing.",
    "Once hardened, wait at least one hour for the flask to be completely sealed before usage.",
    "When consuming the concoction, gulp it down AS SOON as the flask is opened. Time is ever-fleeting and can easily slip away."

  ],
  solutionColor: "#06fcf3" // Light Blue
};

const recipe510624: Recipe = {
  id: "510624",
  title: "The Phial of Psychosomatic Strengthening",
  intro: "It is widely known that the mind and body are one and the same - an afflicted spirit oft leads to a weakened state of the physical. The aspiring alchemist can thus deduct that fortifying the psyche of the individual, in turn must cure the body.",
  steps: [
    {
      title: "A Floral Foundation",
      description: "For centuries, wise druids have attempted to achieve spiritual enlightenment in nature. Let us not ignore the wisdom they have gathered, and start by adding a floral foundation.",
      ingredient: "lavender"
    },
    {
      title: "The Purple Heart:",
      description: "To further compound the floral base, we must add a single sprig of the Purple Heart often found in the gardens of the monasteries. The scent of this plant will add a calming presence and sooth its imbiber with great tranquility.",
      ingredient: "lavender"
    },
    {
      title: "The Raven's Wing:",
      description: "Once again, we must call upon the intelligent avian. A few components of its body will ensure a brew that is not only extremely potent, but will generate mental fortitude the likes of which cannot be experienced naturally We should aim to have our avian component slightly outweigh our plant-based foundation.",
      ingredient: "ravenfeather"
    }
  ],
  additionalInstructions: [
    "Stir clockwise with a rod made of pure gold.",
    "Whisper your deepest desire into the steam."
  ],
  solutionColor: "???" // Faint yellow-ish
};

const recipe741938: Recipe = {
  id: "741938",
  title: "Placebo of Plasmatic Panacea - Timeless Tonic of Cure-All",
  intro: "Your alchemical journey has brought you here, to the pinnacle of all equivalent exchange and mastery over brewery. By closely obeying the following rules and instructions, you will craft the Alpha and Omega - a consumable so divine that it has the power of life itself and has existed since the dawn of mankind. After consuming the previous conconctions, the Panacea will be able to cure you and finally grant you reprieve.",
  steps: [
    {
      title: "Avian Balance:",
      description: "Your alchemical prowess has taught you that flying creatures embody great magical and elemental power. For the ultimate brew of Panacea, you will use equal parts of each of the avian components you have available.",
      ingredient: "none"
    },
    {
      title: "Reptilian Avoidance:",
      description: "However much power the mighty dragons possess, this brew does not stand to gain much from using their lifeforce. You will not use more than 1 component dragon blood for the Panacea.",
      ingredient: "none"
    },
    {
      title: "Workplace Wunderkind:",
      description: "During your journey, you have come to understand the layout of your tools and ingredients. You have come to the realisation that you need balance in all things. You will not find Panacea if you use more ingredients from one side of your alchemical station than another.",
      ingredient: "none"
    },
    {
      title: "Kaleidoscopic Creation:",
      description: "As a master Alchemist, you must trust your senses and let the colors guide you. The final brew is visually recognisable - its color does not match any of the colors you have brewed. In fact, no potion you could have actually created up until this point could have been the color that the Panacea will possess.",
      ingredient: "none"
    },
  ],
  additionalInstructions: [
    "Measure twice, cut not once - all of the ingredients will be consumed in their entirety to guarantee harmony.",
    "The Panacea is a brew of balance - ensure that you do not overuse any ingredients, as this will throw off the equilibrium and render the brew ineffective.",
    "Ensure your cauldron is sufficiently filled with water - you will not be able to find Panacea without this vital component.",
    "Brewing this potion takes a long time - ensure you are properly hydrated during the search for your Panacea"
  ],
  solutionColor: "????" // ???
};

export const allRecipes: Record<string, Recipe> = {
  "original": initialRecipe,
  "741938": recipe741938,
  "285913": recipe285913,
  "510624": recipe510624,
};
