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

import { ThemeRegistry } from '@instructure/ui-themeable'
import { canvasHighContrast } from '@instructure/ui-theme-tokens'

const {
  borders,
  breakpoints,
  colors,
  forms,
  media,
  shadows,
  spacing,
  stacking,
  transitions,
  typography
} = canvasHighContrast

const key = 'canvas-high-contrast'

const theme = ThemeRegistry.registerTheme({
  key,
  description: 'This theme meets WCAG 2.0 AA rules for color contrast.',
  variables: { ...canvasHighContrast }
})

export default theme
export {
  theme,
  key,
  colors,
  borders,
  transitions,
  typography,
  spacing,
  forms,
  media,
  breakpoints,
  shadows,
  stacking
}