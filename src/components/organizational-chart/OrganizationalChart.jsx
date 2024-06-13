import PropTypes from "prop-types";
import { Tree, TreeNode } from "react-organizational-chart";
//
import { StandardNode } from "./node";

// ----------------------------------------------------------------------

OrganizationalChart.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array,
  }),
};

export default function OrganizationalChart({
  data,
  variant = "simple",
  sx,
  ...other
}) {
  return (
    <Tree
      lineWidth="4px"
      nodePadding="2px"
      lineColor="#1B87F3"
      label={
        <StandardNode
          sx={sx}
          node={data}
          onEdit={() => console.log("EDIT", data.name)}
          onDelete={() => console.log("DELETE", data.name)}
        />
      }
      {...other}
    >
      {data.children.map((list) => (
        <List key={list.name} depth={1} data={list} variant={variant} sx={sx} />
      ))}
    </Tree>
  );
}

// ----------------------------------------------------------------------

List.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array,
  }),
  sx: PropTypes.object,
  depth: PropTypes.number,
  variant: PropTypes.string,
};

export function List({ data, depth, variant, sx }) {
  const hasChild = data.children && !!data.children;

  return (
    <TreeNode
      label={
        <StandardNode
          sx={sx}
          node={data}
          onEdit={() => console.log("EDIT", data.name)}
          onDelete={() => console.log("DELETE", data.name)}
        />
      }
    >
      {hasChild && (
        <SubList data={data.children} depth={depth} variant={variant} sx={sx} />
      )}
    </TreeNode>
  );
}

// ----------------------------------------------------------------------

SubList.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
  depth: PropTypes.number,
  variant: PropTypes.string,
};

function SubList({ data, depth, variant, sx }) {
  return (
    <>
      {data.map((list) => (
        <List
          key={list.name}
          data={list}
          depth={depth + 1}
          variant={variant}
          sx={sx}
        />
      ))}
    </>
  );
}
