import Tensor from '../../Tensor'
import Layer from '../../Layer'

/**
 * Square layer class
 */
export default class Square extends Layer {
  /**
   * Creates a Reshape layer
   */
  constructor(attrs = {}) {
    super(attrs)
    this.layerClass = 'Square'
  }

  /**
   * Method for layer computational logic
   * @param {Tensor} x
   * @returns {Tensor} x
   */
  call(x) {
    return x**2
  }
}
