/**
 * Copyright (c) 2021 - present Beignana Jim Junior and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import createComponent from "./core/createComponent";
import createElement, {withComponent} from "./core/createElement";
import { Fragment } from "./core/Fragment";
import append from "./renderer/append";
import Component from "./renderer/createComponent";
import { render } from "./renderer/render";
const version = "__PACKAGE_VERSION__"
/**
* A Javascript library for building Browser User Interfaces
* @author Beigana Jim Junior <jimjunior854@outlook.com>
* @copyright Beigana Jim Junior © 2021 - present
* @license MIT
*
* Learn more at the official Documentation: {@link https://orbiton.js.org}
*/
const Orbiton = {
  withComponent,
  render,
  createElement,
  append,
  Component,
  createComponent,
  Fragment,
  version
}
export default Orbiton

