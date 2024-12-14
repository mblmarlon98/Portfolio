import {Link} from "react-router-dom";
import "./Navbar.scss"

import * as React from 'react';

export interface NavbarProps {}

export default class Navbar extends React.Component < NavbarProps > {
    public render() {
        return (
            <nav id="navbar">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto">
                    <div className="flex justify-center">
                        <Link to="/" className="flex items-center logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="219.439mm"
                                height="141.824mm"
                                viewBox="0 0 1244 804">
                                <path
                                    id="Selection"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="1"
                                    d="M 682.00,413.00 C 689.20,414.59
                696.73,411.98 704.00,411.51 715.14,410.79 725.01,417.32 734.00,422.95 744.99,429.83 761.51,437.21
                765.89,450.00 767.34,454.20 767.05,459.54 767.00,464.00 766.82,479.25 758.71,496.00 751.28,509.00
                738.06,532.12 720.33,553.80 701.96,573.00 701.96,573.00 686.04,588.04 686.04,588.04 686.04,588.04
                677.96,597.00 677.96,597.00 672.64,602.56 659.18,614.75 653.00,619.20 653.00,619.20 643.72,627.13
                643.72,627.13 632.44,636.34 615.34,648.08 600.00,646.32 595.01,645.75 589.52,642.51 585.00,640.25
                585.00,640.25 562.01,627.90 562.01,627.90 559.56,626.23 552.61,620.17 552.63,617.09 552.64,614.07
                556.76,613.14 559.00,612.31 563.95,610.46 573.23,607.01 573.77,600.99 573.77,600.99 569.28,567.00
                569.28,567.00 569.28,567.00 565.85,535.00 565.85,535.00 565.85,535.00 561.17,500.00 561.17,500.00
                561.17,500.00 558.09,469.00 558.09,469.00 558.09,469.00 556.83,448.00 556.83,448.00 556.83,448.00
                553.00,411.00 553.00,411.00 553.00,411.00 552.00,386.00 552.00,386.00 552.00,386.00 551.00,371.00
                551.00,371.00 551.00,371.00 551.00,358.00 551.00,358.00 551.00,358.00 550.09,346.00 550.09,346.00
                550.09,346.00 549.00,317.00 549.00,317.00 549.00,317.00 548.00,302.00 548.00,302.00 547.95,297.57
                548.81,281.00 547.09,278.13 543.64,272.35 531.47,273.30 532.13,263.00 532.50,257.10 538.69,251.55
                541.22,243.00 543.80,234.28 541.80,225.23 545.51,221.32 550.63,215.92 556.34,224.62 563.96,218.69
                563.96,218.69 583.17,199.88 583.17,199.88 594.81,189.79 630.06,163.42 643.00,156.31 652.32,151.19
                671.78,142.84 682.00,140.81 682.00,140.81 692.00,139.83 692.00,139.83 700.95,138.96 710.57,138.67
                719.00,142.52 726.27,145.83 748.44,165.69 755.00,172.01 761.21,177.99 769.17,183.81 773.89,191.00
                779.01,198.78 780.10,207.93 780.00,217.00 780.00,217.00 776.22,245.00 776.22,245.00 772.00,260.04
                758.63,289.07 750.86,303.00 750.86,303.00 723.95,350.00 723.95,350.00 723.95,350.00 691.67,399.00
                691.67,399.00 691.67,399.00 682.00,413.00 682.00,413.00 Z M 264.00,497.00 C 264.00,497.00 264.00,543.00
                264.00,543.00 264.00,543.00 266.00,566.00 266.00,566.00 266.06,571.71 267.02,579.47 261.87,583.28
                258.43,585.81 250.60,586.17 246.00,587.42 241.72,588.59 234.17,591.60 230.31,588.40 225.92,584.77
                227.06,571.49 227.00,566.00 227.00,566.00 226.00,553.00 226.00,553.00 226.00,553.00 226.00,534.00
                226.00,534.00 226.00,534.00 225.04,517.00 225.04,517.00 225.04,517.00 225.04,503.00 225.04,503.00
                225.04,503.00 226.00,491.00 226.00,491.00 226.00,491.00 226.00,458.00 226.00,458.00 226.00,458.00
                227.00,443.00 227.00,443.00 227.00,443.00 227.00,427.00 227.00,427.00 227.00,427.00 228.00,411.00
                228.00,411.00 228.00,411.00 228.00,385.00 228.00,385.00 228.00,385.00 228.91,373.00 228.91,373.00
                228.91,373.00 234.83,310.00 234.83,310.00 234.83,310.00 237.17,275.00 237.17,275.00 237.17,275.00
                240.73,247.00 240.73,247.00 240.73,247.00 248.25,198.00 248.25,198.00 249.17,192.46 250.20,182.40
                255.21,179.09 260.72,175.46 269.15,179.56 274.00,182.70 290.73,193.53 290.69,212.32 298.00,229.00
                301.28,219.11 294.24,217.48 300.00,211.00 300.02,216.51 299.70,217.33 303.00,222.00 303.00,222.00
                305.48,210.01 305.48,210.01 305.48,210.01 298.00,198.00 298.00,198.00 303.08,198.41 304.47,198.97
                306.00,204.00 314.86,196.17 318.16,199.49 323.22,209.00 323.22,209.00 333.80,235.00 333.80,235.00
                346.88,268.30 349.15,283.39 357.12,317.00 359.95,328.94 363.79,350.83 369.00,361.00 369.00,361.00
                373.70,353.00 373.70,353.00 373.70,353.00 375.96,346.00 375.96,346.00 375.96,346.00 379.69,338.00
                379.69,338.00 381.45,334.06 381.22,331.45 385.00,329.00 385.00,329.00 385.00,338.00 385.00,338.00
                386.55,331.87 388.37,321.49 394.00,318.00 394.00,333.73 392.70,334.16 390.00,349.00 396.68,342.29
                398.97,340.21 401.80,331.00 403.98,323.88 404.11,314.18 411.00,310.00 411.00,310.00 409.50,319.00
                409.50,319.00 409.10,322.38 410.48,325.64 409.50,330.00 408.52,337.13 404.65,338.47 407.00,347.00
                407.00,347.00 411.98,331.00 411.98,331.00 411.98,331.00 415.89,324.00 415.89,324.00 415.89,324.00
                421.44,305.00 421.44,305.00 421.44,305.00 426.00,288.00 426.00,288.00 426.00,288.00 424.00,289.00
                424.00,289.00 424.00,289.00 424.00,284.00 424.00,284.00 438.34,279.75 432.20,262.69 432.38,259.00
                432.38,259.00 436.00,237.00 436.00,237.00 436.00,237.00 439.00,237.00 439.00,237.00 438.60,245.56
                435.99,245.77 439.00,254.00 439.00,254.00 449.63,221.00 449.63,221.00 449.63,221.00 452.98,207.42
                452.98,207.42 452.98,207.42 450.00,198.00 450.00,198.00 460.97,197.99 470.68,194.12 480.96,200.36
                486.29,203.61 487.12,208.30 488.08,214.00 488.08,214.00 490.09,239.00 490.09,239.00 490.09,239.00
                491.04,249.00 491.04,249.00 491.04,249.00 491.04,264.00 491.04,264.00 491.04,264.00 492.00,276.00
                492.00,276.00 492.00,276.00 492.00,343.00 492.00,343.00 492.00,343.00 493.00,360.00 493.00,360.00
                493.00,360.00 493.00,425.00 493.00,425.00 493.00,425.00 492.00,442.00 492.00,442.00 492.00,442.00
                492.00,471.00 492.00,471.00 492.00,471.00 493.00,488.00 493.00,488.00 493.00,488.00 493.00,558.00
                493.00,558.00 493.00,558.00 494.00,576.00 494.00,576.00 493.84,584.78 489.58,584.47 482.00,587.00
                482.00,587.00 452.00,597.33 452.00,597.33 447.92,598.69 440.25,602.19 436.34,599.82 430.67,596.39
                431.21,585.70 430.96,580.00 430.96,580.00 430.00,569.00 430.00,569.00 430.00,569.00 430.00,550.00
                430.00,550.00 429.98,540.37 426.90,526.90 431.00,518.00 431.14,524.23 431.71,528.59 435.00,534.00
                435.00,534.00 436.00,500.00 436.00,500.00 436.00,500.00 434.73,484.00 434.73,484.00 434.73,484.00
                432.98,478.01 432.98,478.01 432.98,478.01 432.98,470.00 432.98,470.00 432.98,470.00 431.00,474.00
                431.00,474.00 431.00,474.00 430.00,458.00 430.00,458.00 430.00,458.00 430.00,440.00 430.00,440.00
                430.00,440.00 429.34,431.00 429.34,431.00 429.34,431.00 430.00,422.00 430.00,422.00 430.00,422.00
                429.40,395.04 429.40,395.04 429.40,395.04 426.00,391.00 426.00,391.00 426.00,391.00 410.00,444.00
                410.00,444.00 408.02,449.79 405.10,459.89 399.96,463.26 397.20,465.07 391.43,465.39 388.00,465.87
                377.04,467.39 367.92,466.88 357.00,467.00 346.94,467.12 339.83,471.38 335.10,468.82 329.68,465.88
                325.31,449.14 323.34,443.00 316.43,421.38 307.66,387.27 304.43,365.00 304.43,365.00 302.18,344.00
                302.18,344.00 302.16,338.11 304.88,335.94 300.00,331.00 300.00,331.00 301.16,326.00 301.16,326.00
                301.16,326.00 299.00,309.00 299.00,309.00 298.14,315.32 296.23,315.96 295.16,321.00 295.16,321.00
                295.16,336.00 295.16,336.00 295.16,336.00 294.09,346.00 294.09,346.00 294.09,346.00 292.00,381.00
                292.00,381.00 292.00,381.00 290.96,396.00 290.96,396.00 290.96,396.00 290.96,407.00 290.96,407.00
                290.96,407.00 290.00,417.00 290.00,417.00 290.00,417.00 290.00,433.00 290.00,433.00 290.00,433.00
                289.00,449.00 289.00,449.00 289.00,449.00 289.00,469.00 289.00,469.00 289.00,469.00 288.00,491.00
                288.00,491.00 288.00,491.00 289.00,506.00 289.00,506.00 289.00,506.00 289.00,527.00 289.00,527.00
                289.00,527.00 287.04,551.00 287.04,551.00 287.04,551.00 287.91,565.00 287.91,565.00 288.11,568.52
                287.40,575.01 285.27,577.85 283.68,579.97 280.09,581.83 277.98,579.26 276.50,577.41 278.09,569.09
                277.98,566.00 277.75,560.82 276.69,557.40 274.00,553.00 274.00,553.00 274.00,575.00 274.00,575.00
                273.91,579.43 274.04,581.67 269.00,581.00 272.54,561.25 270.15,540.81 268.17,521.00 267.40,513.32
                267.96,503.51 264.00,497.00 Z M 616.00,386.00 C 622.15,383.08 624.90,378.40 628.71,373.00 628.71,373.00
                645.34,348.00 645.34,348.00 668.42,314.09 692.71,276.06 710.22,239.00 710.22,239.00 719.64,217.00
                719.64,217.00 719.64,217.00 724.03,202.00 724.03,202.00 725.00,198.95 728.79,192.31 726.36,189.74
                723.29,186.50 712.51,190.20 709.00,191.79 692.92,199.11 676.48,205.83 662.00,216.14 662.00,216.14
                647.00,226.67 647.00,226.67 647.00,226.67 624.00,245.92 624.00,245.92 618.79,250.28 609.08,258.32
                607.21,265.00 606.91,267.05 606.98,270.80 607.21,273.00 607.21,273.00 607.91,283.00 607.91,283.00
                607.91,283.00 611.96,327.00 611.96,327.00 611.96,327.00 611.96,337.00 611.96,337.00 611.96,337.00
                614.09,363.00 614.09,363.00 614.09,363.00 616.00,386.00 616.00,386.00 Z M 327.00,231.00 C 325.08,225.14
                320.87,207.27 317.42,203.42 316.00,201.84 314.85,201.65 313.00,201.00 313.00,201.00 313.00,209.00
                313.00,209.00 306.47,210.75 313.36,217.65 313.00,225.00 313.00,225.00 310.00,218.00 310.00,218.00
                303.33,221.76 306.46,230.72 305.52,236.99 305.03,240.32 302.84,241.40 301.73,244.17 300.87,246.31
                300.98,249.67 301.00,252.00 301.00,252.00 303.88,281.00 303.88,281.00 303.56,282.85 302.77,284.32
                302.00,286.00 302.00,286.00 307.00,292.00 307.00,292.00 307.00,292.00 302.00,293.00 302.00,293.00
                304.85,295.77 305.12,295.80 309.00,295.00 307.09,300.14 306.17,301.39 310.00,306.00 310.02,300.00
                311.49,291.41 314.00,286.00 316.27,295.32 317.99,315.14 322.00,323.00 322.00,323.00 326.40,315.00
                326.40,315.00 326.40,315.00 325.15,304.00 325.15,304.00 325.15,304.00 322.83,283.00 322.83,283.00
                322.83,283.00 322.00,270.00 322.00,270.00 322.89,274.67 323.41,275.82 327.00,279.00 327.00,279.00
                324.96,266.00 324.96,266.00 324.96,266.00 322.74,256.04 322.74,256.04 322.74,256.04 325.00,252.00
                325.00,252.00 325.00,252.00 319.99,228.00 319.99,228.00 319.99,228.00 319.99,224.00 319.99,224.00
                319.99,224.00 323.00,232.00 323.00,232.00 323.00,232.00 327.00,231.00 327.00,231.00 Z M 265.00,203.00
                C 265.00,203.00 260.25,221.00 260.25,221.00 260.25,221.00 252.91,241.00 252.91,241.00 246.98,261.65
                246.26,274.41 243.72,295.00 243.72,295.00 238.00,340.00 238.00,340.00 237.95,350.29 238.91,357.94
                236.00,368.00 236.00,368.00 245.00,362.00 245.00,362.00 245.00,362.00 240.00,361.00 240.00,361.00
                246.89,357.54 245.90,352.79 246.72,346.00 247.82,336.77 248.63,320.11 251.80,312.00 251.80,312.00
                251.80,331.86 251.80,331.86 251.80,331.86 254.00,335.00 254.00,335.00 254.05,328.94 254.66,322.63
                257.00,317.00 257.00,317.00 256.18,337.00 256.18,337.00 256.18,337.00 256.68,345.00 256.68,345.00
                256.68,345.00 254.42,366.00 254.42,366.00 254.42,366.00 254.42,379.43 254.42,379.43 254.42,379.43
                257.00,381.00 257.00,381.00 257.00,381.00 257.00,369.00 257.00,369.00 257.00,369.00 258.35,348.00
                258.35,348.00 258.35,348.00 258.35,343.00 258.35,343.00 258.35,343.00 259.92,333.00 259.92,333.00
                259.92,333.00 259.92,324.00 259.92,324.00 259.92,324.00 261.56,315.00 261.56,315.00 261.56,315.00
                266.00,293.00 266.00,293.00 266.00,293.00 268.00,293.00 268.00,293.00 268.00,293.00 267.00,326.00
                267.00,326.00 267.00,326.00 267.00,336.00 267.00,336.00 270.79,327.35 271.00,325.21 271.00,316.00
                271.00,316.00 274.00,316.00 274.00,316.00 275.94,301.63 282.53,283.54 281.96,269.00 281.56,258.79
                279.27,248.75 276.34,239.00 274.77,233.76 275.40,220.50 270.72,218.10 269.31,217.50 268.38,217.88
                267.00,218.10 271.28,211.71 268.43,209.04 265.00,203.00 Z M 880.00,217.00 C 880.00,217.00 881.00,223.00
                881.00,223.00 882.89,221.63 887.04,217.90 889.48,219.17 892.27,220.61 890.98,226.55 890.59,229.00
                890.59,229.00 886.91,260.00 886.91,260.00 886.91,260.00 882.00,309.00 882.00,309.00 882.00,309.00
                880.00,340.00 880.00,340.00 880.00,340.00 879.00,355.00 879.00,355.00 879.00,355.00 878.00,382.00
                878.00,382.00 878.00,382.00 877.00,399.00 877.00,399.00 877.00,399.00 877.00,416.00 877.00,416.00
                877.00,416.00 875.00,439.00 875.00,439.00 875.00,439.00 875.00,456.00 875.00,456.00 875.00,456.00
                874.00,473.00 874.00,473.00 874.00,473.00 874.00,525.00 874.00,525.00 874.00,525.00 875.00,545.00
                875.00,545.00 875.09,552.48 876.92,559.71 878.40,567.00 879.01,569.99 879.47,574.22 882.28,575.98
                886.21,578.45 898.17,574.37 903.00,573.40 917.35,570.53 926.37,568.98 940.00,562.69 940.00,562.69
                961.00,551.00 961.00,551.00 961.00,551.00 958.00,557.00 958.00,557.00 958.00,557.00 968.00,552.63
                968.00,552.63 973.65,550.80 977.50,551.16 983.00,550.74 983.00,550.74 992.00,549.26 992.00,549.26
                992.00,549.26 1002.00,551.08 1002.00,551.08 1008.27,552.14 1018.97,552.28 1014.99,561.99 1013.18,566.41
                1007.84,569.61 1004.00,572.28 994.25,579.06 978.30,585.80 967.00,589.95 953.69,594.83 924.07,600.98
                910.00,601.00 891.50,601.03 885.21,598.10 868.00,595.42 868.00,595.42 849.00,592.42 849.00,592.42
                832.97,589.94 823.23,587.82 815.25,572.00 814.16,569.84 812.27,566.22 811.63,564.00 810.61,560.41
                810.05,548.18 810.00,544.00 810.00,544.00 807.00,502.00 807.00,502.00 807.00,502.00 809.00,474.00
                809.00,474.00 809.00,474.00 809.00,459.00 809.00,459.00 809.00,459.00 810.00,439.00 810.00,439.00
                810.00,439.00 811.90,418.00 811.90,418.00 811.90,418.00 811.32,408.00 811.32,408.00 811.32,408.00
                818.00,358.00 818.00,358.00 818.53,347.13 820.19,346.28 823.02,337.00 823.02,337.00 828.57,311.00
                828.57,311.00 829.69,304.34 828.51,298.28 836.00,296.00 836.00,296.00 836.00,291.00 836.00,291.00
                836.00,291.00 834.00,293.00 834.00,293.00 834.00,293.00 833.00,293.00 833.00,293.00 833.00,293.00
                834.00,285.00 834.00,285.00 838.18,284.85 839.82,284.90 843.00,282.00 843.00,282.00 838.00,283.00
                838.00,283.00 833.97,276.82 834.35,274.85 839.00,269.00 839.00,269.00 839.00,280.00 839.00,280.00
                846.90,277.38 842.69,270.82 849.00,256.00 853.50,259.37 851.87,263.03 851.14,268.00 850.81,271.98
                850.15,282.45 851.14,286.00 851.14,286.00 854.00,266.00 854.00,266.00 859.28,264.25 859.21,261.02
                860.20,256.00 861.85,247.58 861.81,240.69 866.00,233.00 868.57,237.43 868.00,241.05 868.00,246.00
                873.14,240.80 876.97,224.61 880.00,217.00 Z M 301.00,230.00 C 301.00,230.00 298.00,232.00 298.00,232.00
                298.00,232.00 301.00,233.00 301.00,233.00 301.00,233.00 301.00,230.00 301.00,230.00 Z M 326.00,234.00
                C 324.78,237.34 325.23,237.93 328.00,240.00 328.45,236.43 328.48,236.61 326.00,234.00 Z M 301.00,237.00
                C 301.00,237.00 301.00,241.00 301.00,241.00 301.00,241.00 301.00,237.00 301.00,237.00 Z M 293.00,258.00
                C 293.71,253.02 293.16,248.20 287.00,249.00 287.00,249.00 293.00,258.00 293.00,258.00 Z M 331.00,250.00
                C 331.00,250.00 329.00,250.00 329.00,250.00 329.00,250.00 331.00,255.00 331.00,255.00 331.00,255.00
                331.00,250.00 331.00,250.00 Z M 438.00,257.00 C 438.00,257.00 437.00,257.00 437.00,257.00 437.00,257.00
                438.00,258.00 438.00,258.00 438.00,258.00 438.00,257.00 438.00,257.00 Z M 462.00,268.00 C 456.10,276.29
                458.76,283.19 460.00,292.00 460.00,292.00 462.00,292.00 462.00,292.00 462.00,292.00 462.00,268.00
                462.00,268.00 Z M 329.00,269.00 C 329.00,269.00 328.00,269.00 328.00,269.00 328.00,269.00 329.00,270.00
                329.00,270.00 329.00,270.00 329.00,269.00 329.00,269.00 Z M 286.00,278.00 C 286.00,278.00 284.00,278.00
                284.00,278.00 284.00,278.00 283.00,301.00 283.00,301.00 283.00,301.00 284.00,313.00 284.00,313.00
                285.18,299.94 291.42,294.72 286.00,278.00 Z M 328.00,280.00 C 325.24,283.81 326.54,287.54 327.28,292.00
                328.44,298.88 330.92,305.37 332.98,312.00 334.31,316.32 334.92,320.96 337.00,325.00 336.86,309.85
                332.76,294.28 328.00,280.00 Z M 842.00,287.00 C 842.00,287.00 840.00,287.00 840.00,287.00 840.00,287.00
                839.00,291.00 839.00,291.00 841.71,289.87 841.45,289.87 842.00,287.00 Z M 313.00,300.00 C 313.00,300.00
                311.00,301.00 311.00,301.00 311.00,301.00 314.00,303.00 314.00,303.00 314.00,303.00 313.00,300.00
                313.00,300.00 Z M 452.00,304.00 C 448.90,308.69 448.90,314.87 451.00,320.00 453.27,313.11 453.26,311.02
                452.00,304.00 Z M 840.00,308.00 C 840.00,308.00 838.00,308.00 838.00,308.00 838.00,308.00 839.00,316.00
                839.00,316.00 839.00,316.00 840.00,308.00 840.00,308.00 Z M 267.00,338.00 C 265.51,340.59 265.51,341.41
                267.00,344.00 267.00,344.00 267.00,338.00 267.00,338.00 Z M 384.00,340.00 C 384.00,340.00 383.00,340.00
                383.00,340.00 383.00,340.00 384.00,341.00 384.00,341.00 384.00,341.00 384.00,340.00 384.00,340.00 Z M
                252.00,343.00 C 252.00,343.00 252.00,349.00 252.00,349.00 252.00,349.00 252.00,343.00 252.00,343.00 Z M
                658.00,370.00 C 664.98,367.45 668.61,360.13 672.00,354.00 672.94,352.30 675.76,347.77 673.37,346.16
                672.14,345.33 668.61,346.76 667.00,347.00 667.00,347.00 658.10,354.73 658.10,354.73 658.10,354.73
                651.61,362.41 651.61,362.41 651.61,362.41 640.00,371.51 640.00,371.51 640.00,371.51 630.00,380.96
                630.00,380.96 623.16,387.49 617.48,389.19 618.09,400.00 618.09,400.00 619.94,412.00 619.94,412.00
                619.94,412.00 619.94,420.00 619.94,420.00 621.25,431.22 622.00,428.58 622.00,442.00 625.92,438.58
                634.42,427.74 636.68,423.00 636.68,423.00 640.52,414.00 640.52,414.00 640.52,414.00 653.34,395.00
                653.34,395.00 656.28,390.67 663.09,382.28 662.00,377.00 657.84,382.50 645.22,397.26 640.00,401.00
                640.00,401.00 645.00,391.00 645.00,391.00 636.79,395.45 632.46,405.90 626.00,413.00 626.00,413.00
                644.85,386.00 644.85,386.00 644.85,386.00 657.00,367.00 657.00,367.00 657.00,367.00 658.00,370.00
                658.00,370.00 Z M 382.00,347.00 C 382.00,347.00 382.00,351.00 382.00,351.00 382.00,351.00 382.00,347.00
                382.00,347.00 Z M 265.00,352.00 C 265.00,352.00 265.00,358.00 265.00,358.00 265.00,358.00 265.00,352.00
                265.00,352.00 Z M 380.00,354.00 C 380.00,354.00 379.00,358.00 379.00,358.00 379.00,358.00 380.00,354.00
                380.00,354.00 Z M 389.00,355.00 C 389.00,355.00 388.00,359.00 388.00,359.00 388.00,359.00 389.00,355.00
                389.00,355.00 Z M 378.00,361.00 C 378.00,361.00 375.00,365.00 375.00,365.00 375.00,365.00 376.00,366.00
                376.00,366.00 376.00,366.00 378.00,366.00 378.00,366.00 378.00,366.00 379.00,365.00 379.00,365.00
                379.00,365.00 378.00,361.00 378.00,361.00 Z M 265.00,367.00 C 265.00,367.00 263.00,367.00 263.00,367.00
                263.00,367.00 264.00,371.00 264.00,371.00 264.00,371.00 265.00,367.00 265.00,367.00 Z M 377.00,370.00 C
                377.00,370.00 375.00,370.00 375.00,370.00 375.00,370.00 375.00,375.00 375.00,375.00 375.00,375.00
                377.00,370.00 377.00,370.00 Z M 667.00,372.00 C 667.00,372.00 664.00,376.00 664.00,376.00 664.00,376.00
                667.00,372.00 667.00,372.00 Z M 383.00,379.00 C 383.00,379.00 382.00,379.00 382.00,379.00 382.00,379.00
                383.00,380.00 383.00,380.00 383.00,380.00 383.00,379.00 383.00,379.00 Z M 257.00,384.00 C 254.19,385.61
                253.37,385.95 255.00,389.00 255.00,389.00 257.00,384.00 257.00,384.00 Z M 255.00,395.00 C 255.00,395.00
                253.00,395.00 253.00,395.00 253.00,395.00 250.91,423.00 250.91,423.00 250.91,423.00 250.00,498.00
                250.00,498.00 250.00,498.00 249.00,534.00 249.00,534.00 249.00,534.00 248.00,516.00 248.00,516.00
                247.98,510.84 248.68,506.61 246.00,502.00 246.00,502.00 245.04,521.00 245.04,521.00 245.29,526.80
                246.70,528.54 247.12,532.00 247.76,537.29 245.77,539.66 249.00,546.00 250.31,540.65 249.17,539.10
                253.00,535.00 253.00,543.83 254.12,563.46 258.00,571.00 258.00,571.00 259.00,561.00 259.00,561.00
                259.00,561.00 260.00,542.00 260.00,542.00 260.00,542.00 260.00,516.00 260.00,516.00 260.00,516.00
                259.00,501.00 259.00,501.00 259.00,501.00 259.00,463.00 259.00,463.00 259.00,463.00 255.00,467.00
                255.00,467.00 255.00,467.00 257.00,432.00 257.00,432.00 257.00,432.00 254.87,414.77 254.87,414.77
                254.87,414.77 253.00,414.00 253.00,414.00 257.35,404.65 254.38,406.56 254.84,401.26 254.84,401.26
                256.00,396.00 256.00,396.00 256.00,396.00 255.00,395.00 255.00,395.00 Z M 836.00,402.00 C 836.00,402.00
                835.00,402.00 835.00,402.00 835.00,402.00 836.00,403.00 836.00,403.00 836.00,403.00 836.00,402.00
                836.00,402.00 Z M 831.00,412.00 C 831.00,412.00 830.00,412.00 830.00,412.00 830.00,412.00 831.00,413.00
                831.00,413.00 831.00,413.00 831.00,412.00 831.00,412.00 Z M 696.00,416.00 C 692.71,415.22 682.07,415.32
                679.60,417.74 678.25,419.05 678.29,420.32 678.00,422.00 678.00,422.00 696.00,416.00 696.00,416.00 Z M
                334.00,420.00 C 331.77,425.21 331.68,430.55 333.00,436.00 333.00,436.00 338.00,435.00 338.00,435.00
                337.76,429.79 336.75,424.50 334.00,420.00 Z M 340.00,440.00 C 336.33,445.20 339.51,448.93 344.00,452.00
                344.00,452.00 340.00,440.00 340.00,440.00 Z M 837.00,441.00 C 837.00,441.00 836.00,441.00 836.00,441.00
                836.00,441.00 837.00,442.00 837.00,442.00 837.00,442.00 837.00,441.00 837.00,441.00 Z M 719.00,445.00 C
                717.27,447.83 717.16,448.23 719.00,451.00 719.00,451.00 719.00,445.00 719.00,445.00 Z M 679.00,529.00 C
                686.20,525.13 689.77,519.32 694.65,513.00 703.96,500.95 714.18,487.30 719.58,473.00 719.58,473.00
                726.79,452.00 726.79,452.00 727.30,450.16 728.24,444.20 724.22,446.17 721.90,447.30 717.39,459.05
                716.00,462.00 716.00,462.00 718.00,451.00 718.00,451.00 712.87,453.71 712.36,457.00 710.00,462.00
                710.00,462.00 715.00,447.00 715.00,447.00 703.30,447.04 704.99,448.67 695.00,452.31 681.36,457.27
                682.88,456.79 670.00,463.02 670.00,463.02 661.00,466.90 661.00,466.90 655.29,469.98 643.33,479.32
                637.00,478.50 633.37,478.04 631.30,474.50 626.00,472.00 623.03,482.46 626.95,496.11 627.00,507.00
                627.00,507.00 628.09,534.00 628.09,534.00 628.09,534.00 628.09,542.00 628.09,542.00 628.53,545.78
                630.83,555.15 630.29,558.00 629.93,559.87 628.71,562.17 628.00,564.00 631.49,563.57 633.99,563.63
                637.00,561.54 643.84,556.78 648.07,547.34 656.00,545.00 657.31,539.00 661.54,534.66 665.26,530.02
                667.17,527.62 669.13,523.94 672.00,527.00 672.00,527.00 680.39,517.17 680.39,517.17 680.39,517.17
                696.00,500.00 696.00,500.00 693.11,511.26 684.05,519.08 679.00,529.00 Z M 837.00,447.00 C 837.00,447.00
                836.00,447.00 836.00,447.00 836.00,447.00 837.00,448.00 837.00,448.00 837.00,448.00 837.00,447.00
                837.00,447.00 Z M 846.00,449.00 C 844.23,452.84 842.81,463.77 843.17,468.00 843.17,468.00 844.83,479.00
                844.83,479.00 845.42,485.03 844.25,488.84 846.00,495.00 851.75,487.44 848.01,474.81 847.17,466.00
                846.47,458.72 847.65,458.20 846.00,449.00 Z M 837.00,452.00 C 837.00,452.00 835.00,452.00 835.00,452.00
                835.00,452.00 833.00,480.00 833.00,480.00 832.98,485.30 833.95,488.00 830.00,492.00 832.01,486.63
                833.00,483.71 829.00,479.00 828.85,485.87 826.52,497.75 829.00,504.00 829.00,504.00 832.00,497.00
                832.00,497.00 830.87,503.42 831.46,522.63 835.00,528.00 838.31,502.89 837.00,477.30 837.00,452.00
                Z M 435.00,459.00 C 435.00,459.00 433.00,464.00 433.00,464.00 433.00,464.00 435.00,464.00 435.00,464.00
                435.00,464.00 435.00,459.00 435.00,459.00 Z M 831.00,469.00 C 831.00,469.00 830.00,469.00 830.00,469.00
                830.00,469.00 831.00,470.00 831.00,470.00 831.00,470.00 831.00,469.00 831.00,469.00 Z M 444.00,486.00 C
                441.70,489.56 441.46,491.52 444.00,495.00 444.00,495.00 444.00,486.00 444.00,486.00 Z M 444.00,500.00 C
                440.88,507.87 444.80,530.96 446.00,540.00 446.00,540.00 448.00,540.00 448.00,540.00 448.00,521.07
                446.34,517.66 444.00,500.00 Z M 675.00,534.00 C 675.00,534.00 674.00,534.00 674.00,534.00 674.00,534.00
                675.00,535.00 675.00,535.00 675.00,535.00 675.00,534.00 675.00,534.00 Z M 667.00,542.00 C 667.00,542.00
                663.00,545.00 663.00,545.00 665.87,544.45 665.87,544.71 667.00,542.00 Z M 623.00,556.00 C 623.00,556.00
                621.00,559.00 621.00,559.00 621.00,559.00 624.00,560.00 624.00,560.00 624.00,560.00 623.00,556.00
                623.00,556.00 Z"/>
                            </svg>
                        </Link>

                        <div className="" id="navbar-multi-level flex flex items-center">
                            <Link to="/portfolio" className="block py-2 pl-3 pr-4 ml-5">
                                <span>
                                    Portfolio
                                </span>
                            </Link>
                        </div>
                        <div className="" id="navbar-multi-level flex flex items-center">
                            <Link to="/about-me" className="block py-2 pl-3 pr-4 ml-5">
                                <span>
                                    About Me
                                </span>
                            </Link>
                        </div>

                    </div>
                    <div className="flex">
                        <a
                            href="mailto:berdefymarlon@gmail.com?subject=Project%20Inquiry%20from%20mbl.com&body=Hi%20Marlon,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%20I've%20had%20the%20chance%20to%20explore%20your%20work%20on%20your%20website,%20and%20I%20would%20like%20to%20discuss%20a%20specific%20project%20in%20more%20detail.%0D%0A%0D%0ACould%20you%20please%20provide%20additional%20information%20on%20your%20availability,%20rates,%20and%20the%20next%20steps%20for%20starting%20a%20collaboration?%0D%0A%0D%0AThank%20you,%0D%0A[Sender's%20Name]"
                            className="btn-white font-medium rounded-lg text-sm px-5 py-2.5">
                            Contact Me
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
