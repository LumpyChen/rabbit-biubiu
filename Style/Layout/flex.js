/* @flow */

/**
 * Flex Layout 
 *
 * ���Ժ��Ӳ���ģ��
 *
 * ����ͳfloat��inline-block�������һ���������������á��ŵ��Ǽ�
 * ��ֱ�ۣ�����ʵ�ָ��ֲ������⣬��ˮƽ���У���ֱ���еȣ�ȱ���Ǽ���
 * �����⣬��Ҫ֧��IE10+�������Ƽ��ڼ�����Ҫ�󲻸ߵĵط�ʹ�ã����
 * ̨����ϵͳ��mobile�ˡ�
 *
 * ��ʹ�ã�ֻ��Ҫ�ڸ���������`display: flex`�Ϳ����ˡ�һ����˵��
 * ��3�����ԱȽϳ��ã�
 *
 * 1. justify-content ����λ�õ����з�ʽ
 * 2. align-items ��������Ԫ�ص����з�ʽ
 * 3. flex-flow ���Ǹ�������ԣ������`flex-direction`
 *    ��`flex-wrap`��ǰ���趨������x����y�������趨������ʽ
 *
 * �紹ֱ����:
 * ```css
 * .con {
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 * }
 * 
 * ��Ȼ�����ǻ����Զ�ÿ����Ԫ���趨�Լ�����Ϊ�����ﳣ�õľ���`flex`
 * ������ԡ�`flex`Ҳ�Ǹ�������ԣ���`flex-grow`��`flex-shrink`��
 * `flex-basic`��ɣ��ֱ����������������������ߴ硣���÷�ʽ���¡�
 *
 * ÿ����Ԫ�سߴ�ƽ��:
 * ```css
 * .items {
 *   flex: 1 1 auto;
 * }
 *
 * ������Ȳ���������Ԫ�أ����10px���ұ�20px���м䲿�ֿ��
 * �����������������:
 * .items1 { flex: 0 1 10px; }
 * .items3 { flex: 0 1 20px; }
 * .items2 { flex: 1 1 auto; }
 *
 *
 * ��������
 * 1. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
 * 2. [MDN �������](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
 * 3. [Flex demo](http://demo.agektmr.com/flexbox/)
 * 4. [Flexyboxes](http://the-echoplex.net/flexyboxes/)
 * 5. [css Reference](http://tympanus.net/codrops/css_reference/flexbox/)
 * 6. [Caniuse](http://caniuse.com/#feat=flexbox)
 */


type Direction =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'

type Wrapper =
    | 'wrap'
    | 'no-wrap'
    | 'wrap-reverse'

type Position =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'baseline'
    | 'stretch'


const DefaultDirection: Direction  = 'row'
const DefaultStart:     Position   = 'flex-start'
const DefaultStretch:   Position   = 'stretch'
const DefaultWrap:      Wrapper    = 'wrap'


function defineContainer() {
    return { 'display': 'flex' }
}

function defineDirection(direction: Direction = DefaultDirection) {
    return { 'flex-direction': direction }
}


function defineWrap(wrap: Wrapper = DefaultWrap) {
    return { 'flex-wrap': wrap }
}

function defineFlow(direction: Direction = DefaultDirection,
                    wrap: Wrapper = DefaultWrap) {
    return { 'flex-flow': `${direction} ${wrap}` }
}

function defineJustifyContent(position: Position = DefaultStart) {
    return { 'justify-content': position }
}

function defineAlianItems(position: Position = DefaultStretch) {
    return { 'align-items': position }
}

function constFlex(direction: Direction = DefaultDirection,
                          wrap: Wrapper = DefaultWrap,
                          justifyContent: Position = DefaultStart,
                          alignitems: Position = DefaultStretch) {

    return Object.assign({},
                         defineContainer(),
                         defineFlow(direction, wrap),
                         defineJustifyContent(justifyContent),
                         defineAlianItems(alignitems))
}
