import { type Recipe } from './types';

const initialRecipe: Recipe = {
  id: "original",
  title: "The Brew of Nightmares",
  intro: "Few realise that a myriad of diseases and magical ailments can be counteracted by one another. In the distand lands to the East, many alchemists brew potions that stir up nightmares in order to overpower other undesirable afflictions - after all, nightmares don't end lives (often)...",
  steps: [
    {
      title: "The Purple Bushel:",
      description: "Seek the scent of serenity in a field of lilac blooms. Pluck the sprigs that soothe one's sleep and cast them into the seething liquid - this calming base will provide a counterpart for the more volatile ingredients to come.",
      ingredient: "lavender",
      // Toevoegen tot #ee3197
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
  solutionColor: "#3107b1" // ForestGreen
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
      description: "When violet is submerged in dynamic blue, freezing temperature alone is not sufficient for temporal containment. To seal our flask with crystalized time, fiery hot magma must be used to ellicit the correct alchemical reaction.",
      ingredient: "firered_liquid"
    }
  ],
  additionalInstructions: [
    "Handle every ingredient with the utmost care and - time is a frail thing.",
    "Once hardened, wait at least one hour for the flask to be completely sealed before usage.",
    "When consuming the concoction, gulp it down AS SOON as the flask is opened. Time is ever-fleeting and can easily slip away."

  ],
  solutionColor: "#4169E1" // RoyalBlue
};

const recipe510624: Recipe = {
  id: "510624",
  title: "The Phial of Psychosomatic Strengthening",
  intro: "It is widely known that the mind and body are one and the same - an afflicted spirit oft leads to a weakened state of the physical. The aspring alchemist can thus deduct, that fortifying the psyche of the individual, must cure the body in turn.",
  steps: [
    {
      title: "The Golden Nectar:",
      description: "A common misconception is that Nectar is merely a vegetational substance. When used for an alchemical base, however, its latent mystical properties are truly unshackled. Its silky substance and stimulating aroma, enhanced by the alchemical processes, sharpen ones mind and provide immense clarity and serenity.",
      ingredient: "golden_liquid"
    },
    {
      title: "The Purple Heart:",
      description: "To further compound the floral base, we must add a single sprig of the Purple Heart often found in the gardens of the monasteries. The scent of this plant will add a calming presence and sooth its imbiber with great tranquility.",
      ingredient: "lavender"
    },
    {
      title: "The Raven's Wing:",
      description: "Once again, we call upon the intellegent avian. A single component of its body will ensure a brew that is not only extremely potent, but will generate mental fortitude the likes of which cannot be experienced naturally.",
      ingredient: "ravenfeather"
    }
  ],
  additionalInstructions: [
    "Stir clockwise with a rod made of pure gold.",
    "Whisper your deepest desire into the steam."
  ],
  solutionColor: "#DAA520" // GoldenRod
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
  ],
  solutionColor: "#FFD700" // Gold
};

export const allRecipes: Record<string, Recipe> = {
  "original": initialRecipe,
  "741938": recipe741938,
  "285913": recipe285913,
  "510624": recipe510624,
};
