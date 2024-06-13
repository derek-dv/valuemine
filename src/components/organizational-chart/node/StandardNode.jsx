import PropTypes from "prop-types";
// @mui
import { Typography, Card, alpha } from "@mui/material";

// ----------------------------------------------------------------------

StandardNode.propTypes = {
  sx: PropTypes.object,
  node: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function StandardNode({ node, sx }) {
  const styles = (color) => ({
    bgcolor: alpha(color, 0.08),
    border: `solid 1px ${alpha(color, 0.24)}`,
  });

  const isGrRoot = node.group === "root";

  const isGrExecutive = node.group === "executive";
  const isGrMarketing = node.group === "marketing";
  const isGrBusiness = node.group === "business";
  const isGrTechnical = node.group === "technical";
  const isGrSecurity = node.group === "security";

  return (
    <Card
      sx={{
        p: 2,
        maxWidth: 180,
        borderRadius: 1.5,
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        textTransform: "capitalize",
        textAlign: "center",
        py: 2,
        ...(isGrRoot && styles("#886AE4")),
        ...(isGrExecutive && styles("#C942B7")),
        ...(isGrMarketing && styles("#A27E6F")),
        ...(isGrBusiness && styles("#94524A")),
        ...(isGrTechnical && styles("#2F0A28")),
        ...(isGrSecurity && styles("#12A55C")),
        ...sx,
      }}
    >
      <Typography variant="subtitle2" noWrap>
        {node.name}
      </Typography>

      <Typography
        variant="caption"
        component="div"
        noWrap
        sx={{ color: "text.secondary" }}
      >
        {node.role}
      </Typography>
    </Card>
  );
}
