export type Ratings = Record<string, number | null>;
export interface FormData {
  fullName:string; projectTeam:string; commercialExperience:string;
  technicalBackground:Ratings; tasksOutsideFrontend:string; productionExperience:string[]; productionExperienceOther:string; productionExamples:string;
  developmentInterest:Ratings; priorityDirections:string[]; threeMonthDirection:string; threeMonthDirectionReason:string; desiredIndependentTasks:string;
  pilotParticipation:string; learningTimePerWeek:string; knowledgeSharing:string; learningObstacles:string;
}
