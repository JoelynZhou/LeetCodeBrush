const RangeType = {
  NORMAL: "NORMAL",
  STOCK_UP: "STOCK_UP",
  DELEGATION: "DELEGATION",
  NOT_DELEGATION: "NOT_DELEGATION",
  ONDEMAND: "ONDEMAND",
  PROBLEM: "PROBLEM",
  RETURN_GOODS: "RETURN_GOODS",
  UNOWNED_PACKAGE: "UNOWNED_PACKAGE",
  ABNORMAL_PACKAGE: "ABNORMAL_PACKAGE",
  VIRTUAL_INVENTORY: "VIRTUAL_INVENTORY",
  ONCE_ARRIVED: "ONCE_ARRIVED"
};

/**
 * 深度优先遍历
 * 查询tree对应节点所在路径
 */
function findLeafPathInTree(tree, target) {
  let path = null;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    console.log("node", node);
    if (node.children && node.children.length > 0) {
      // 如果是中间节点，就继续往下遍历并保存结果
      path = findLeafPathInTree(node.children, target);
      // 如果是目标节点，就把当前节点放入路径并返回
      if (path) {
        path.unshift(node.value);
        return path;
      }
    } else {
      // 在叶子节点中进行判断，符合条件就返回路径
      if (node.value === target) {
        return [node.value];
      }
    }
  }
  return path;
}

const rangeTypeEnum = [
  {
    label: "正常件",
    value: RangeType.NORMAL,
    children: [
      {
        label: "备货",
        value: RangeType.STOCK_UP,
        children: [
          {
            label: "以销定结",
            value: RangeType.DELEGATION
          },
          {
            label: "非以销定结",
            value: RangeType.NOT_DELEGATION
          }
        ]
      },
      {
        label: "按需",
        value: RangeType.ONDEMAND
      }
    ]
  },
  {
    label: "问题件",
    value: RangeType.PROBLEM,
    children: [
      {
        label: "退货",
        value: RangeType.RETURN_GOODS
      },
      {
        label: "无主包裹",
        value: RangeType.UNOWNED_PACKAGE
      },
      {
        label: "异常件",
        value: RangeType.ABNORMAL_PACKAGE
      }
    ]
  },
  {
    label: "虚拟库存",
    value: RangeType.VIRTUAL_INVENTORY,
    children: [
      {
        label: "一次性到齐",
        value: RangeType.ONCE_ARRIVED
      }
    ]
  }
];
console.log(findLeafPathInTree(rangeTypeEnum, RangeType.DELEGATION));
