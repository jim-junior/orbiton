/**
 * Copyright (c) 2021 - present Beignana Jim Junior and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable no-undef */
import { evaluateStyleTag } from '../ElementAttributes'

const style = {
  backgroundAttachment: "fixed",
  fontFamily: "Roboto"
}

const styleString = "background-attachment: fixed;font-family: Roboto;"

test("Transform Javascript Object to CSS style attr string", () => {
  expect(evaluateStyleTag(style)).toEqual(styleString)
})
