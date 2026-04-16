import { type Recipe } from './types';

const initialRecipe: Recipe = {
  id: "original",
  title: "The Brew of Nightmares",
  intro: "Few realise that a myriad of diseases and magical ailments can be counteracted by one another. In the distand lands to the East, many alchemists brew potions that stir up nightmares in order to overpower other undesirable afflictions - after all, nightmares don't end lives (often)...",
  steps: [
    {
      title: "The Purple Bushel:",
      description: "Seek the scent of serenity in a field of lilac blooms. Pluck the sprigs that soothe one's sleep and cast them into the seething liquid.",
      ingredient: "lavender"
    },
    {
      title: "A Leap of Faith:",
      description: "Add the limb of the croaker from the muddy pool, she who leaps when the moon hides behind the clouds.",
      ingredient: "frogleg"
    },
    {
      title: "The Verdant Hue",
      description: "Ironically, the final touch for the Brew of Nightmares is a dash of soft, dark green. That being said, contrary to its soft appeal, the liquid is still highly acidic. Please refrain from handling these without the necessary safety precautions.",
      ingredient: "green_liquid"
    }
  ],
  additionalInstructions: [
    "Stir three times counter-clockwise after each ingredient.",
    "Ignore any and all hallucinations, visions and whispers that may arise during the brewing process.",
    "When the steam turns black and the liquid hums, the brew is ready for consumption."
  ]
};

const recipe285913: Recipe = {
  id: "285913",
  title: "The Flask of Frozen Time",
  intro: "Where traditional medicine fails, arcane remedies can provide an alternative route to relief. When magic can not be used to cure the relevant ailments, one can always halt the progress of any disease using borrowed time.",
  steps: [
    {
      title: "A Fragment of Flight:",
      description: "In order to halt all passage of time, one must first capture the essence of freedom. A sliver of violet plucked from an intelligent yet foreboding creature should suffice.",
      ingredient: "raven_feather"
    },
    {
      title: "A Stream of Liquid Ice:",
      description: "Novice alchemists would scoff at the description of the reagent known as Liquid Ice - the state of matter is something you learn in the first lessons at the Academy. It is no surprise, then, that a large amount of young alchemists end up in infirmaries with frostbite when handling the piercing blue Liquid Ice ",
      ingredient: "lightblue_liquid"
    },
    {
      title: "The Fiery Seal:",
      description: "When violet is submerged in dynamic blue, freezing temperature alone is not sufficient to capture true time. To seal our flask with crystalized time, fiery hot magma must be used to ellicit the correct alchemical reaction.",
      ingredient: "firered_liquid"
    }
  ],
  additionalInstructions: [
    "Handle every ingredient with the utmost care and - time is a frail thing.",
    "Once hardened, wait at least one hour for the flask to be completely sealed before usage.",
    "When consuming the concoction, gulp it down AS SOON as the flask is opened. Time is ever-fleeting and can easily slip away."

  ]
};

const recipe510624: Recipe = {
  id: "510624",
  title: "The Essence of Liquid Gold",
  intro: "To transmute lead into fortune, follow the ancient path of the sun:",
  steps: [
    {
      title: "The Solar Flare:",
      description: "A drop of nectar from the Sun-flower that blooms only at high noon.",
      ingredient: "sunnectar"
    },
    {
      title: "The Serpent's Heart:",
      description: "The pulsing heart of a golden viper, freshly taken beneath the desert sun.",
      ingredient: "viperheart"
    },
    {
      title: "The Raven's Wing:",
      description: "A single feather from the bird that stole the sun from the sky.",
      ingredient: "ravenfeather"
    }
  ],
  additionalInstructions: [
    "Stir clockwise with a rod made of pure gold.",
    "Whisper your deepest desire into the steam."
  ]
};

const recipe741938: Recipe = {
  id: "741938",
  title: "The Elixir of Eternal Sight",
  intro: "To see that which is hidden from mortal eyes, prepare this glowing tonic:",
  steps: [
    {
      title: "The Golden Scale:",
      description: "Take the shimmering scale of the sun-drake, found only in the peaks of the Fire Mountain.",
      ingredient: "dragonscale"
    },
    {
      title: "The Midnight Drop:",
      description: "A single tear from the weeping willow that stands at the edge of the world.",
      ingredient: "willowtear"
    },
    {
      title: "The Eye of the Abyss:",
      description: "Add the dried pupil of the deep-sea lurker, preserved in brine for a century.",
      ingredient: "lurkereye"
    }
  ],
  additionalInstructions: [
    "Boil until the liquid glows with a soft golden hue.",
    "Strain through a cloth woven from spider silk."
  ]
};

export const allRecipes: Record<string, Recipe> = {
  "original": initialRecipe,
  "741938": recipe741938,
  "285913": recipe285913,
  "510624": recipe510624,
};
