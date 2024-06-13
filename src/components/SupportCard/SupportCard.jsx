import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../PageHeader'
import images from '../../../assets/images'

function SupportCard() {
  return (
    <PageHeader
    title="Support"
    currentPage="Support"
    backgroundImage={images.aboutImage}
    breadcrumbs={[
      { label: "Home", path: "/" },
      { label: "Support", path: "/support" },
    ]}
  />
  )
}

export default SupportCard