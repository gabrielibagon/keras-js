import Tensor from '../../Tensor'
import Layer from '../../Layer'

/**
 * Square layer class
 */
export default class Sqrt extends Layer {
  /**
   * Creates a Reshape layer
   */
  constructor(attrs = {}) {
    super(attrs)
    this.layerClass = 'Sqrt'
  }

  /**
   * Method for layer computational logic
   * @param {Tensor} x
   * @returns {Tensor} x
   */
  call(x) {
    return Math.sqrt(x)
  }
}
