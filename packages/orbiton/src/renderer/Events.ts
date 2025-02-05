/**
 * Copyright (c) 2021 - present Beignana Jim Junior and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrbitonDOMElement, OrbitonSVGElement } from "../../types/index"

/**
* Appends events to a node that is passed in
* @param {OrbitonDOMElement|OrbitonSVGElement} node - The node to append the events
* @param {Record<string, VoidFunction>} events - an object containing the key as the event and the value as the function
*/
export function appendEvents(
  node: OrbitonDOMElement | OrbitonSVGElement,
  events: Record<string, VoidFunction>
): void {
  //console.log(events)
  node._orbiton$config.extendEvents = events
  for (const [k, v] of Object.entries(events)) {
    node.addEventListener(k, v)
  }
}



export function compareEventListeners(oldEvents: any, newEvents: Record<string, VoidFunction>) {

  return (node: OrbitonDOMElement) => {
    // eslint-disable-next-line no-use-before-define
    removeFromeNode(node)
    appendEvents(node, newEvents)
    return node
  }
}


export function removeFromeNode(node: OrbitonDOMElement) {
  for (const [k, v] of Object.entries(node._orbiton$config.extendEvents)) {
    node.removeEventListener(k, v)
  }
}
