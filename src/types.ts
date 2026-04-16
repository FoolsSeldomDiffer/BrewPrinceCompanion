export interface RecipeStep {
  title: string;
  description: string;
  ingredient?: string; // Optioneel, want we willen ze niet tonen maar wel bijhouden voor de logica indien nodig
}

export interface Recipe {
  id: string;
  title: string;
  intro: string;
  steps: RecipeStep[];
  additionalInstructions: string[];
}
