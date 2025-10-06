"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[867],{

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/index.js
var react = __webpack_require__(6363);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.9.1_@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0__react-dom@_3fe5344a2badf17583f12489cd537e57/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(227);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.9.1_@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0__react-dom@_3fe5344a2badf17583f12489cd537e57/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(1936);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_um1G","tagRegular":"tagRegular_hNAe","tagWithCount":"tagWithCount_ovLX"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag({permalink,label,count,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_tUsW","tag":"tag_hQ_W"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline({tags}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm'),children:tags.map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:TagsListInline_styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{...tag})},tag.permalink))})]});}

/***/ }),

/***/ 4250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogAuthorsPostsPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/index.js
var react = __webpack_require__(6363);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+react@3.1._c766a1a672374b4422edc1258196eaf5/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(2457);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+react@3.1._c766a1a672374b4422edc1258196eaf5/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(4366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+react@3.1._c766a1a672374b4422edc1258196eaf5/node_modules/@docusaurus/theme-common/lib/translations/blogTranslations.js
var blogTranslations = __webpack_require__(596);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.9.1_@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0__react-dom@_3fe5344a2badf17583f12489cd537e57/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(1936);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+rea_527b9491115aa2f4cce6ba921fefd581/node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(1946);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(32);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.9.1_@mdx-js+react@3.1.1_@types+react@19.2.0_react@19.2.0__react-dom@_3fe5344a2badf17583f12489cd537e57/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(227);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(5174);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7259);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogListPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:"pagination-nav","aria-label":(0,Translate/* translate */.T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'}),children:[previousPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{permalink:previousPage,title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),nextPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{permalink:nextPage,title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:true})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(7407);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer({children,className}){return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:className,children:children});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_Q5Y3"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle({className}){const{metadata,isBlogPostPage}=(0,client/* useBlogPost */.e7)();const{permalink,title}=metadata;const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx/* default */.A)(styles_module.title,className),children:isBlogPostPage?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:permalink,children:title})});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+react@3.1._c766a1a672374b4422edc1258196eaf5/node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.9.1_@docusaurus+plugin-content-docs@3.9.1_@mdx-js+react@3.1._c766a1a672374b4422edc1258196eaf5/node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(415);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Info_styles_module = ({"container":"container_waIh"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){const{selectMessage}=(0,usePluralForm/* usePluralForm */.W)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function ReadingTime({readingTime}){const readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readingTimePlural(readingTime)});}function DateTime({date,formattedDate}){return/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:date,children:formattedDate});}function Spacer(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:' · '});}function BlogPostItemHeaderInfo({className}){const{metadata}=(0,client/* useBlogPost */.e7)();const{date,readingTime}=metadata;const dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});const formatDate=blogDate=>dateTimeFormat.format(new Date(blogDate));return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Info_styles_module.container,'margin-vert--md',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateTime,{date:date,formattedDate:formatDate(date)}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spacer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ReadingTime,{readingTime:readingTime})]})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(4097);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_mZKc","imageOnlyAuthorRow":"imageOnlyAuthorRow_o8TE","imageOnlyAuthorCol":"imageOnlyAuthorCol_RMBC"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors({className}){const{metadata:{authors},assets}=(0,client/* useBlogPost */.e7)();const authorsCount=authors.length;if(authorsCount===0){return null;}const imageOnly=authors.every(({name})=>!name);const singleAuthor=authors.length===1;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className),children:authors.map((author,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(!imageOnly&&(singleAuthor?'col col--12':'col col--6'),imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{author:{...author,// Handle author images using relative paths
imageURL:assets.authorsImageUrls[idx]??author.imageURL}})},idx))});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderInfo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors,{})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+utils-common@3.9.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(1601);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(4190);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent({children,className}){const{isBlogPostPage}=(0,client/* useBlogPost */.e7)();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib/* blogPostContainerID */.LU:undefined,className:(0,clsx/* default */.A)('markdown',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(4024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 3 modules
var TagsListInline = __webpack_require__(501);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})});}function BlogPostItemFooterReadMoreLink(props){const{blogPostTitle,...linkProps}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle}),...linkProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ReadMoreLabel,{})});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){const{metadata,isBlogPostPage}=(0,client/* useBlogPost */.e7)();const{tags,title,editUrl,hasTruncateMarker,lastUpdatedBy,lastUpdatedAt}=metadata;// A post is truncated if it's in the "list view" and it has a truncate marker
const truncatedPost=!isBlogPostPage&&hasTruncateMarker;const tagsExists=tags.length>0;const renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}// BlogPost footer - details view
if(isBlogPostPage){const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('row','margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]});}// BlogPost footer - list view
else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',{'col--9':truncatedPost}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})}),truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col text--right',{'col--3':tagsExists}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata.permalink})})]});}}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// apply a bottom margin in list view
function useContainerClassName(){const{isBlogPostPage}=(0,client/* useBlogPost */.e7)();return!isBlogPostPage?'margin-bottom--xl':undefined;}function BlogPostItem({children,className}){const containerClassName=useContainerClassName();return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogPostItemContainer,{className:(0,clsx/* default */.A)(containerClassName,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooter,{})]});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems({items,component:BlogPostItemComponent=BlogPostItem}){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map(({content:BlogPostContent})=>/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogPostProvider */["in"],{content:BlogPostContent,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemComponent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostContent,{})})},BlogPostContent.metadata.permalink))});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.9.1_@types+react@19.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0_typescript@5.6.3/node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsPostsPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Metadata({author}){const title=(0,blogTranslations/* useBlogAuthorPageTitle */.wI)(author);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_authors_posts"})]});}function ViewAllAuthorsLink(){const{authorsListPath}=(0,client/* useBlogMetadata */.x)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:authorsListPath,children:/*#__PURE__*/(0,jsx_runtime.jsx)(blogTranslations/* BlogAuthorsListViewAllLabel */.np,{})});}function Content({author,items,sidebar,listMetadata}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:"margin-bottom--xl",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{as:"h1",author:author}),author.description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:author.description}),/*#__PURE__*/(0,jsx_runtime.jsx)(ViewAllAuthorsLink,{})]}),items.length===0?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(blogTranslations/* BlogAuthorNoPostsLabel */.Y4,{})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItems,{items:items}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPaginator,{metadata:listMetadata})]})]});}function BlogAuthorsPostsPage(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogAuthorsPostsPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Metadata,{...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{...props})]});}

/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6363);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3526);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7259);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__label",children:title})]});}

/***/ }),

/***/ 8302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8229);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5365);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8451);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(644);
/* harmony import */ var _theme_original_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4792);
// Import the original mapper
// Import the library component.
// Import all brands icons.
// Import all solid icons.
// Import the FontAwesomeIcon component.
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__/* .library */ .Yv.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__/* .fab */ .Cvc,_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__/* .fas */ .X7I);// Add all icons to the library so you can use them without importing them individually.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({// Re-use the default mapping
..._theme_original_MDXComponents__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,Icon:_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__/* .FontAwesomeIcon */ .gc// Make the FontAwesomeIcon component available in MDX as <icon />.
});

/***/ })

}]);