import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
// new views
import News from "./views/News/News";
import Products from "./views/Products";
import Trainings from "./views/Trainings";
import Files from "./views/Files";
import Dealers from "./views/Dealers";
import ContactsSupport from "./views/ContactsSupport";
import PagesList from "./views/PagesList";
import TeamMembers from "./views/TeamMembers";
import Jobs from "./views/Jobs";
import Users from "./views/Users";
import NewsEditor from "./views/NewsEditor";
import ProductEditor from "./views/ProductEditor";
import TrainingEditor from "./views/TrainingEditor";
import FileEditor from "./views/FileEditor";
import { join } from "path";
import JobsEditor from "./views/JobsEditor";
import TeamMembersEditor from "./views/TeamMembersEditor";
import Categories from "./views/Categories";
import ProductCategoryEditor from "./views/ProductCategoryEditor";
import UsersEditor from "./views/UsersEditor";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    // component: () => <Redirect to="/dashboard" />
    component: () => <Redirect to="/news" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  // My panel
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/trainings",
    layout: DefaultLayout,
    component: Trainings
  },
  {
    path: "/files",
    layout: DefaultLayout,
    component: Files
  },
  {
    path: "/dealers",
    layout: DefaultLayout,
    component: Dealers
  },
  {
    path: "/contacts-and-support",
    layout: DefaultLayout,
    component: ContactsSupport
  },
  {
    path: "/pages",
    layout: DefaultLayout,
    component: PagesList
  },
  {
    path: "/team",
    layout: DefaultLayout,
    component: TeamMembers
  },
  {
    path: "/jobs",
    layout: DefaultLayout,
    component: Jobs
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/news",
    layout: DefaultLayout,
    component: News
  },
  {
    path: "/news-editor",
    layout: DefaultLayout,
    component: NewsEditor
  },
  {
    path: "/news-editor/:id",
    layout: DefaultLayout,
    component: NewsEditor
  },
  {
    path: "/product-editor",
    layout: DefaultLayout,
    component: ProductEditor
  },
  {
    path: "/training-editor",
    layout: DefaultLayout,
    component: TrainingEditor
  },
  {
    path: "/file-editor",
    layout: DefaultLayout,
    component: FileEditor
  },
  {
    path: "/jobs-editor",
    layout: DefaultLayout,
    component: JobsEditor
  },
  {
    path: "/team-editor",
    layout: DefaultLayout,
    component: TeamMembersEditor
  },
  {
    path: "/categories",
    layout: DefaultLayout,
    component: Categories
  },
  {
    path: "/product-category-editor",
    layout: DefaultLayout,
    component: ProductCategoryEditor
  },
  {
    path: "/users-editor",
    layout: DefaultLayout,
    component: UsersEditor
  }
];
