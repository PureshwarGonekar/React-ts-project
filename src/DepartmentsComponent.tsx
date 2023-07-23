import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

interface DepartmentNode {
  nodeId: string;
  label: string;
  subDepartments: string[];
}

interface DepartmentListProps {
  data: DepartmentData[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ data }) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (nodeId: string) => {
    const currentIndex = selected.indexOf(nodeId);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      // Select the node
      newSelected.push(nodeId);
      // Automatically select the parent department if all sub-departments are selected
      const allSubDepartments = getAllSubDepartments(nodeId);
      const parentDepartment = getParentDepartment(nodeId);

      if (allSubDepartments.every((subDept) => newSelected.includes(subDept)) && parentDepartment) {
        newSelected.push(parentDepartment);
      }
    } else {
      // Deselect the node
      newSelected.splice(currentIndex, 1);
      // Automatically deselect the parent department if all sub-departments are deselected
      const allSubDepartments = getAllSubDepartments(nodeId);
      const parentDepartment = getParentDepartment(nodeId);

      if (allSubDepartments.every((subDept) => !newSelected.includes(subDept)) && parentDepartment) {
        newSelected.splice(newSelected.indexOf(parentDepartment), 1);
      }
    }

    setSelected(newSelected);
  };

  const getAllSubDepartments = (department: string): string[] => {
    const dept = data.find((dept) => dept.department === department);
    return dept ? dept.sub_departments : [];
  };

  const getParentDepartment = (subDepartment: string): string | undefined => {
    const dept = data.find((dept) => dept.sub_departments.includes(subDepartment));
    return dept ? dept.department : undefined;
  };

  const handleNodeToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    console.log(event);
    setExpanded(nodeIds);
  };

  const renderTree = (nodes: DepartmentNode[]) => (
    <>
      {nodes.map((node) => (
        <TreeItem
          key={node.nodeId}
          nodeId={node.nodeId}
          label={
            <div onClick={() => handleToggle(node.nodeId)}>
              {selected.indexOf(node.nodeId) !== -1 ? (
                <CheckBoxIcon fontSize="small" />
              ) : (
                <CheckBoxOutlineBlankIcon fontSize="small" />
              )}
              {node.label}
            </div>
          }
        >
          {Array.isArray(node.subDepartments)
            ? renderTree(
                node.subDepartments.map((subDepartment) => ({
                  nodeId: subDepartment,
                  label: subDepartment,
                  subDepartments: [],
                }))
              )
            : null}
        </TreeItem>
      ))}
    </>
  );

  const departmentNodes: DepartmentNode[] = data.map((dept) => ({
    nodeId: dept.department,
    label: dept.department,
    subDepartments: dept.sub_departments,
  }));

  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleNodeToggle}
    >
      {renderTree(departmentNodes)}
    </TreeView>
  );
};

export default DepartmentList;
