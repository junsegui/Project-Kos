import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerModal = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #c8beb5;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  z-index: 97;
  top: 0;
  right: 0;
`;
