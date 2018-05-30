import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "../content/content.component";
import { AppComponent } from "../app.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { GameCardComponent } from "../game-card/game-card.component";
import { CarouselCardComponent } from "../carousel-card/carousel-card.component";
import { QuizComponent } from "../quiz/quiz.component";
import { ResultComponent } from "../result/result.component";
import { PlayComponent } from "../play/play.component";
import { AllTopicsInCategoryComponent } from "../all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "../questions/questions.component";
import { QuestionDetailComponent } from "../question-detail/question-detail.component";
import { TopicDialogComponent } from "../topic-dialog/topic-dialog.component";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";
import { GameCreateComponent } from "../game-create/game-create.component";
import { QuestionService } from "../services/questionservice.service";
import { RecentGameComponent } from "../recent-game/recent-game.component";
import { QuestionCategoryComponent } from "../question-category/question-category.component";
import { CategorySuggetionsComponent } from "../category-suggetions/category-suggetions.component";
import { AuthGuard } from "../LoginAuth/auth.guard";
import { UserupdateprofileComponent } from "../UserProfile/userupdateprofile/userupdateprofile.component";
import { UserProfileComponent } from "../UserProfile/user-profile/user-profile.component";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { AdministrationComponent } from "../administration/administration.component";
import { SearchComponent } from "../search/search.component";
import { SearchresultComponent } from "../searchresult/searchresult.component";
import { SideNavComponent } from "../side-nav/side-nav.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "maverick" },
  { path: "question", component: QuestionCategoryComponent },
  { path: "category-details", component: AllTopicsInCategoryComponent },
  { path: "topic-details", component: QuestionsComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "category", component: ContentComponent },
  { path: "create-game", component: GameCreateComponent },
  {
    component: ContentComponent,
    path: "home/:userId"
  },
  {
    component: ContentComponent,
    path: "content"
  },
  {
    component: LandingPageComponent,
    path: "maverick"
  },
  {
    path: "game-by-categoryId/:id/:userId",
    component: ContentComponent
  },
  { path: "play", component: PlayComponent },
  { path: "quiz", component: QuizComponent },
  { path: "result", component: ResultComponent },
  { path: "categorySuggetions/:id", component: CategorySuggetionsComponent },
  { path: "question-detail", component: QuestionDetailComponent },
  { path: "add-topic", component: TopicDialogComponent },
  { path: "add-question", component: QuestionDialogComponent },
  { path: "form/:id", component: UserupdateprofileComponent },
  { path: "admin", component: AdministrationComponent },
  { path: "**", redirectTo: "maverick" },
  { path: "search", component: SideNavComponent },
  { path: "searchresult/:name", component: SearchresultComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}