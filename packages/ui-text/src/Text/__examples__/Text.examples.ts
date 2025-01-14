/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { TextProps } from '../props'

export default {
  sectionProp: 'weight',
  maxExamplesPerPage: 50,
  maxExamples: 1000,
  getComponentProps: (props: TextProps) => {
    return {
      children:
        props.size &&
        ['x-small', 'small', 'medium', 'large'].includes(props.size)
          ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ullamco'
          : 'Lorem ipsum dolor sit amet, consectetur'
    }
  },
  getExampleProps: (props: TextProps) => {
    return {
      background: props?.color?.includes('inverse')
        ? 'primary-inverse'
        : 'primary',
      maxWidth: '25rem'
    }
  },
  filter: (props: TextProps) => {
    return (
      // Only generate a 1 variation for non-'primary' color
      (props.color !== 'primary' &&
        (props.fontStyle !== 'normal' ||
          props.letterSpacing !== 'normal' ||
          props.lineHeight !== 'default' ||
          props.size !== 'medium' ||
          props.transform !== 'none' ||
          props.weight !== 'normal' ||
          props.wrap !== 'normal')) ||
      // Only generate a 1 variation for non-'medium' size
      (props.size !== 'medium' &&
        (props.fontStyle !== 'normal' ||
          props.letterSpacing !== 'normal' ||
          props.lineHeight !== 'default' ||
          props.transform !== 'none' ||
          props.weight !== 'normal' ||
          props.wrap !== 'normal'))
    )
  }
}
