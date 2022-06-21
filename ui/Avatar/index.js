import {LitElement, html, css} from 'lit';

export class Avatar extends LitElement {
  
  static styles = css`
  :host {
    --rounded-sm: 8px;
    --rounded-md: 10px;
    --rounded-base: 32%;
    --rounded-lg: 12px;
    --rounded-full: 100%;
    --text-size: 0.579rem;
    /* colors */
    --amethyst-50: 247, 247, 255;
    --amethyst-100: 240, 239, 255;
    --amethyst-200: 217, 214, 255;
    --amethyst-300: 193, 189, 255;
    --amethyst-400: 147, 140, 255;
    --amethyst-500: 101, 91, 255;
    --amethyst-600: 91, 82, 230;
    --amethyst-700: 76, 68, 191;
    --amethyst-800: 61, 55, 153;
    --amethyst_900: 49, 45, 125;

    --aqua-50: 242, 253, 255;
    --aqua-100: 230, 251, 255;
    --aqua-200: 191, 246, 255;
    --aqua-300: 153, 240, 255;
    --aqua-400: 77, 228, 255;
    --aqua-500: 0, 217, 255;
    --aqua-600: 0, 195, 230;
    --aqua-700: 0, 163, 191;
    --aqua-800: 0, 130, 153;
    --aqua-900: 0, 106, 125;

    --azure-50: 242, 248, 255;
    --azure-100: 230, 241, 255;
    --azure-200: 191, 221, 255;
    --azure-300: 153, 201, 255;
    --azure-400: 77, 160, 255;
    --azure-500: 0, 119, 255;
    --azure-600: 0, 107, 230;
    --azure-700: 0, 89, 191;
    --azure-800: 0, 71, 153;
    --azure-900: 0, 58, 125;

    --jade-50: 252, 255, 242;
    --jade-100: 248, 255, 230;
    --jade-200: 238, 255, 191;
    --jade-300: 228, 255, 153;
    --jade-400: 207, 255, 77;
    --jade-500: 187, 255, 0;
    --jade-600: 168, 230, 0;
    --jade-700: 140, 191, 0;
    --jade-800: 112, 153, 0;
    --jade-900: 92, 125, 0;

    --jasper-50: 255, 253, 242;
    --jasper-100: 255, 250, 230;
    --jasper-200: 255, 243, 191;
    --jasper-300: 255, 236, 153;
    --jasper-400: 255, 222, 77;
    --jasper-500: 255, 208, 0;
    --jasper-600: 230, 187, 0;
    --jasper-700: 191, 156, 0;
    --jasper-800: 153, 125, 0;
    --jasper-900: 125, 102, 0;

    --kunzite-50: 250, 248, 255;
    --kunzite-100: 246, 240, 255;
    --kunzite-200: 232, 218, 255;
    --kunzite-300: 219, 196, 255;
    --kunzite-400: 191, 152, 255;
    --kunzite-500: 164, 108, 255;
    --kunzite-600: 148, 97, 230;
    --kunzite-700: 123, 81, 191;
    --kunzite-800: 98, 65, 153; 
    --kunzite-900: 80, 53, 125;

    --moonstone-50: 255, 254, 253;
    --moonstone-100: 254, 253, 251;
    --moonstone-200: 253, 249, 244;
    --moonstone-300: 251, 245, 237;
    --moonstone-400: 249, 238, 224;
    --moonstone-500: 246, 231, 210;
    --moonstone-600: 221, 208, 189;
    --moonstone-700: 185, 173, 158;
    --moonstone-800: 148, 139, 126;
    --moonstone-900: 121, 113, 103;

    --peridot-50: 246, 255, 242;
    --peridot-100: 238, 255, 230;
    --peridot-200: 212, 255, 191;
    --peridot-300: 185, 255, 153;
    --peridot-400: 133, 255, 77;
    --peridot-500: 81, 255, 0;
    --peridot-600: 73, 230, 0;
    --peridot-700: 61, 191, 0;
    --peridot-800: 49, 153, 0;
    --peridot-900: 40, 125, 0;

    --ruby-50: 255, 242, 248;
    --ruby-100: 255, 230, 240;
    --ruby-200: 255, 191, 218;
    --ruby-300: 255, 153, 195;
    --ruby-400: 255, 77, 151;
    --ruby-500: 255, 0, 106;
    --ruby-600: 230, 0, 95;
    --ruby-700: 191, 0, 80;
    --ruby-800: 153, 0, 64;
    --ruby-900: 125, 0, 52;

    --russian-50: 243, 243, 244;
    --russian-100: 231, 231, 233;
    --russian-200: 194, 195, 201;
    --russian-300: 158, 159, 169;
    --russian-400: 85, 87, 104;
    --russian-500: 12, 15, 39;
    --russian-600: 11, 14, 35;
    --russian-700: 9, 11, 29;
    --russian-800: 7, 9, 23;
    --russian-900: 6, 7, 19;

    --scarlet-50: 255, 242, 244;
    --scarlet-100: 255, 230, 233;
    --scarlet-200: 255, 191, 200;
    --scarlet-300: 255, 153, 167;
    --scarlet-400: 255, 77, 101;
    --scarlet-500: 255, 0, 35;
    --scarlet-600: 230, 0, 32;
    --scarlet-700: 191, 0, 26;
    --scarlet-800: 153, 0, 21;
    --scarlet-900: 125, 0, 17;

    --stratos-50: 243, 243, 245;
    --stratos-100: 231, 231, 236;
    --stratos-200: 196, 194, 207;
    --stratos-300: 160, 157, 178;
    --stratos-400: 89, 84, 120;
    --stratos-500: 18, 10, 62;
    --stratos-600: 16, 9, 56;
    --stratos-700: 14, 8, 47;
    --stratos-800: 11, 6, 37;
    --stratos-900: 9, 5, 30;

    --sunstone-50: 255, 251, 244;
    --sunstone-100: 255, 246, 233;
    --sunstone-200: 255, 233, 201;
    --sunstone-300: 255, 220, 168;
    --sunstone-400: 255, 194, 102;
    --sunstone-500: 255, 168, 37;
    --sunstone-600: 230, 151, 33;
    --sunstone-700: 191, 126, 28;
    --sunstone-800: 153, 101, 22;
    --sunstone-900: 125, 82, 18;

    --sylver-50: 254, 254, 254;
    --sylver-100: 252, 253, 254;
    --sylver-200: 248, 249, 251;
    --sylver-300: 243, 246, 249;
    --sylver-400: 235, 239, 245;
    --sylver-500: 226, 232, 240;
    --sylver-600: 203, 209, 216;
    --sylver-700: 170, 174, 180;
    --sylver-800: 136, 139, 144;
    --sylver-900: 111, 114, 118;

     color: rgba(var(--kunzite-600), 1);
     font-weight: 900;
    }
`;

  constructor() {
    super();
  }
  render() {
    return html`<p>
      <slot name="placeholder"></slot>
    </p>`;
  } 
}

customElements.define('rui-avatar', Avatar);