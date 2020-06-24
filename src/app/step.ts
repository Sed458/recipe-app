export interface Step {
    id: number;
    title: string;
    description: string;
    step_number: number;
    images: string[];
    videos: string[];
    recipe_id: number;
}