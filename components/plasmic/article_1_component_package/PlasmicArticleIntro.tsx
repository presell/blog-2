// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XBo3ATGmQSjqbBPzfVXf7
// Component: TZikInR5j5KSSW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Reviews from "../../Reviews"; // plasmic-import: ySh9cxpyu1zCFI/component

import { useScreenVariants as useScreenVariantsjfmRqS3HrPugY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JfmRqS3HrPugY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_article_1_component_package.module.css"; // plasmic-import: 8XBo3ATGmQSjqbBPzfVXf7/projectcss
import sty from "./PlasmicArticleIntro.module.css"; // plasmic-import: TZikInR5j5KSSW/css

export type PlasmicArticleIntro__VariantMembers = {};
export type PlasmicArticleIntro__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleIntro__VariantsArgs;
export const PlasmicArticleIntro__VariantProps = new Array<VariantPropType>();

export type PlasmicArticleIntro__ArgsType = {};
type ArgPropType = keyof PlasmicArticleIntro__ArgsType;
export const PlasmicArticleIntro__ArgProps = new Array<ArgPropType>();

export type PlasmicArticleIntro__OverridesType = {
  headline?: p.Flex<"div">;
  heroHeadline?: p.Flex<"div">;
  heroSubHeadline?: p.Flex<"div">;
  aCta?: p.Flex<"button">;
  columns?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  reviews?: p.Flex<typeof Reviews>;
};

export interface DefaultArticleIntroProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicArticleIntro__RenderFunc(props: {
  variants: PlasmicArticleIntro__VariantsArgs;
  args: PlasmicArticleIntro__ArgsType;
  overrides: PlasmicArticleIntro__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjfmRqS3HrPugY()
  });

  return (
    <div
      data-plasmic-name={"headline"}
      data-plasmic-override={overrides.headline}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.headline
      )}
    >
      <div
        data-plasmic-name={"heroHeadline"}
        data-plasmic-override={overrides.heroHeadline}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heroHeadline
        )}
      >
        {hasVariant(globalVariants, "screen", "desktopOnly")
          ? "Hard Hitting Zero-Nic Pods Pack Intense Mango or Mint Flavor!"
          : "Hard Hitting Zero-Nic Pods Pack Intense Mango or Mint Flavor!"}
      </div>

      <div
        data-plasmic-name={"heroSubHeadline"}
        data-plasmic-override={overrides.heroSubHeadline}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heroSubHeadline
        )}
      >
        {hasVariant(globalVariants, "screen", "desktopOnly") ? (
          <React.Fragment>
            <React.Fragment>
              {"This new invention is turning \n"}
            </React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {"bad habits"}
            </span>
            <React.Fragment>{" into a "}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {"healthy ones"}
            </span>
            <React.Fragment>{"..."}</React.Fragment>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <React.Fragment>
              {"This new invention is turning \n"}
            </React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {"bad habits"}
            </span>
            <React.Fragment>{" into a "}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {"healthy ones"}
            </span>
            <React.Fragment>{"..."}</React.Fragment>
          </React.Fragment>
        )}
      </div>

      <button
        data-plasmic-name={"aCta"}
        data-plasmic-override={overrides.aCta}
        className={classNames(
          projectcss.all,
          projectcss.button,
          projectcss.__wab_text,
          sty.aCta
        )}
        disabled={false}
        link={"https://www.quittinghacks.com/rechargeable-offer/" as const}
        ref={ref => {
          $refs["aCta"] = ref;
        }}
      >
        {"CLAIM FREE PODS 👉"}
      </button>

      {(hasVariant(globalVariants, "screen", "desktopOnly") ? true : true) ? (
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__ht4Gm)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"19px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"123px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/article_1_component_package/images/starpng2.png",
                fullWidth: 142,
                fullHeight: 21,
                aspectRatio: undefined
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.column__inF6)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Rated 4.9 Stars By 100,000+ Customers"}
            </div>
          </div>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "desktopOnly") ? true : true) ? (
        <Reviews
          data-plasmic-name={"reviews"}
          data-plasmic-override={overrides.reviews}
          className={classNames("__wab_instance", sty.reviews)}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  headline: [
    "headline",
    "heroHeadline",
    "heroSubHeadline",
    "aCta",
    "columns",
    "img",
    "text",
    "reviews"
  ],
  heroHeadline: ["heroHeadline"],
  heroSubHeadline: ["heroSubHeadline"],
  aCta: ["aCta"],
  columns: ["columns", "img", "text"],
  img: ["img"],
  text: ["text"],
  reviews: ["reviews"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  headline: "div";
  heroHeadline: "div";
  heroSubHeadline: "div";
  aCta: "button";
  columns: "div";
  img: typeof p.PlasmicImg;
  text: "div";
  reviews: typeof Reviews;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleIntro__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleIntro__VariantsArgs;
    args?: PlasmicArticleIntro__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticleIntro__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticleIntro__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicArticleIntro__ArgProps,
          internalVariantPropNames: PlasmicArticleIntro__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicArticleIntro__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "headline") {
    func.displayName = "PlasmicArticleIntro";
  } else {
    func.displayName = `PlasmicArticleIntro.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleIntro = Object.assign(
  // Top-level PlasmicArticleIntro renders the root element
  makeNodeComponent("headline"),
  {
    // Helper components rendering sub-elements
    heroHeadline: makeNodeComponent("heroHeadline"),
    heroSubHeadline: makeNodeComponent("heroSubHeadline"),
    aCta: makeNodeComponent("aCta"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    reviews: makeNodeComponent("reviews"),

    // Metadata about props expected for PlasmicArticleIntro
    internalVariantProps: PlasmicArticleIntro__VariantProps,
    internalArgProps: PlasmicArticleIntro__ArgProps
  }
);

export default PlasmicArticleIntro;
/* prettier-ignore-end */
